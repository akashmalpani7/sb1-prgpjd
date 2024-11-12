import Database from 'better-sqlite3';

const db = new Database(':memory:');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS conversations (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    conversation_id TEXT,
    user_id TEXT,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (conversation_id) REFERENCES conversations(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

export const db = {
  getUser: (email: string) => {
    return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  },
  createMessage: ({ userId, content, conversationId }: { userId: string; content: string; conversationId?: string }) => {
    const stmt = db.prepare(`
      INSERT INTO messages (id, user_id, content, conversation_id)
      VALUES (?, ?, ?, ?)
    `);
    const messageId = crypto.randomUUID();
    stmt.run(messageId, userId, content, conversationId);
    return { messageId };
  },
  getInsights: (userId: string) => {
    return db.prepare(`
      SELECT 
        COUNT(*) as total_messages,
        COUNT(DISTINCT conversation_id) as total_conversations
      FROM messages 
      WHERE user_id = ?
    `).get(userId);
  }
};