import express from 'express';
import { UserController } from '../controllers';

const router = express.Router();

router
  .route('/')

  .get(UserController.list)

  .post(UserController.create);

router
  .route('/:userId')

  .get(UserController.get)

  .put(UserController.update)

  .delete(UserController.remove);

export default router;
