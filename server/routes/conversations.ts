import express from 'express';
import { z } from 'zod';
import { validateRequest } from '../middleware/validateRequest.js';
import { db } from '../db/database.js';

const router = express.Router();

const messageSchema = z.object({
  content: z.string().min(1),
  conversationId: z.string().optional()
});

router.post('/message', validateRequest(messageSchema), async (req, res) => {
  const { content, conversationId } = req.body;
  const userId = req.user!.userId;

  try {
    const response = await db.createMessage({ userId, content, conversationId });
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export const conversationRouter = router;