import express from 'express';
import { db } from '../db/database.js';

const router = express.Router();

router.get('/insights', async (req, res) => {
  const userId = req.user!.userId;
  
  try {
    const insights = await db.getInsights(userId);
    res.json(insights);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export const analyticsRouter = router;