import express from 'express'
import ngoRouter from './ngoRouter.js'
import userRouter from './userRouter.js'
import mailRouter from './mailRouter.js'


const router = express.Router();

router.use('/ngo', ngoRouter);
router.use('/user', userRouter);
router.use('/mail',mailRouter);
export default router;