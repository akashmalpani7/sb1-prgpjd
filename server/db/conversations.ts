import { db } from './init.js';
import { randomUUID } from 'crypto';

export const conversations = {
  create: (userId: string, metadata?: any) => {
    const stmt = db.prepare(`
      INSERT INTO conversations (id, user_id, metadata)
      VALUES (?, ?, ?)
    `);
    const id = randomUUID();
    stmt.run(id, userId, metadata ? JSON.stringify(metadata) : null);
    return { id, userId, metadata };
  },

  addMessage: (conversationId: string, content: string, role: 'user' | 'assistant') => {
    const stmt = db.prepare(`
      INSERT INTO messages (id, conversation_id, content, role)
      VALUES (?, ?, ?, ?)
    `);
    const id = randomUUID();
    stmt.run(id, conversationId, content, role);
    return { id, conversationId, content, role };
  },

  findByUser: (userId: string) => {
    const stmt = db.prepare(`
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
    `);
    return stmt.all(userId).map(row => ({
      ...row,
      messages: JSON.parse(row.messages)
    }));
  },

  findById: (id: string, userId: string) => {
    const stmt = db.prepare(`
      SELECT c.*, json_group_array(json_object(
        'id', m.id,
        'content', m.content,
        'role', m.role,
        'created_at', m.created_at
      )) as messages
      FROM conversations c
      LEFT JOIN messages m ON c.id = m.conversation_id
      WHERE c.id = ? AND c.user_id = ?
      GROUP BY c.id
    `);
    const result = stmt.get(id, userId);
    if (result) {
      result.messages = JSON.parse(result.messages);
    }
    return result;
  }
};