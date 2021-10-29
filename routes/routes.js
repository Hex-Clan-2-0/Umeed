import express from 'express'
import ngoRouter from './ngoRouter.js'
import userRouter from './userRouter.js'
const router = express.Router();

router.use('/ngo', ngoRouter);
router.use('/user', userRouter);
export default router;