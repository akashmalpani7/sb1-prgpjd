import { db } from './init.js';

export const analytics = {
  getOverview: (userId: string) => {
    const conversationCount = db.prepare(`
      SELECT COUNT(*) as count FROM conversations WHERE user_id = ?
    `).get(userId).count;

    const messageCount = db.prepare(`
      SELECT COUNT(*) as count 
      FROM messages m
      JOIN conversations c ON m.conversation_id = c.id
      WHERE c.user_id = ?
    `).get(userId).count;

    const recentConversations = db.prepare(`
      SELECT c.*, json_group_array(json_object(
        'id', m.id,
        'content', m.content,
        'role', m.role,
        'created_at', m.created_at
      )) as messages
      FROM conversations c
      LEFT JOIN messages m ON c.id = m.conversation_id
      WHERE c.user_id = ?
      GROUP BY c.id
      ORDER BY c.updated_at DESC
      LIMIT 5
    `).all(userId).map(row => ({
      ...row,
      messages: JSON.parse(row.messages)
    }));

    return {
      conversationCount,
      messageCount,
      recentConversations
    };
  },

  getUsage: (userId: string, days: number) => {
    const stmt = db.prepare(`
      SELECT date(m.created_at) as date, COUNT(*) as count
      FROM messages m
      JOIN conversations c ON m.conversation_id = c.id
      WHERE c.user_id = ?
      AND m.created_at >= datetime('now', ?)
      GROUP BY date(m.created_at)
      ORDER BY date(m.created_at)
    `);
    return stmt.all(userId, `-${days} days`);
  }
};