import express from 'express';
import userRoutes from './User';

const router = express.Router();

router.get('/health-check', (req, res) => res.send('OK'));

router.use('/users', userRoutes);

export default router;
