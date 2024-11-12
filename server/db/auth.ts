import { db } from './init.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { randomUUID } from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const auth = {
  async createUser(data: { email: string; password: string; name?: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const id = randomUUID();

    try {
      const stmt = db.prepare(`
        INSERT INTO users (id, email, password, name)
        VALUES (?, ?, ?, ?)
      `);
      stmt.run(id, data.email.toLowerCase(), hashedPassword, data.name);

      return {
        id,
        email: data.email,
        name: data.name
      };
    } catch (error: any) {
      if (error.code === 'SQLITE_CONSTRAINT') {
        throw new Error('Email already exists');
      }
      throw error;
    }
  },

  async login(email: string, password: string) {
    const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
    const user = stmt.get(email.toLowerCase());

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '24h' });

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    };
  }
};