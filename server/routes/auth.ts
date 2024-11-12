import express from 'express';
import { z } from 'zod';
import { validateRequest } from '../middleware/validateRequest.js';
import { auth } from '../db/auth.js';

const router = express.Router();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

const signupSchema = loginSchema.extend({
  name: z.string().min(2).optional()
});

router.post('/login', validateRequest(loginSchema), async (req, res) => {
  try {
    const result = await auth.login(req.body.email, req.body.password);
    res.json(result);
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
});

router.post('/signup', validateRequest(signupSchema), async (req, res) => {
  try {
    const user = await auth.createUser(req.body);
    const result = await auth.login(req.body.email, req.body.password);
    res.json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export const authRouter = router;