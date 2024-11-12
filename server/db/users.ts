import { db } from './init.js';
import { randomUUID } from 'crypto';

export const users = {
  create: (data: { email: string; password: string; name?: string; organization?: string }) => {
    const stmt = db.prepare(`
      INSERT INTO users (id, email, password, name, organization)
      VALUES (?, ?, ?, ?, ?)
    `);
    const id = randomUUID();
    stmt.run(id, data.email, data.password, data.name, data.organization);
    return { id, ...data };
  },

  findByEmail: (email: string) => {
    const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
    return stmt.get(email);
  },

  findById: (id: string) => {
    const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
    return stmt.get(id);
  }
};