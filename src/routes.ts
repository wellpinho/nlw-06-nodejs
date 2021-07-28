import { Router } from 'express';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUsersController } from './controllers/CreateUsersController';

const router = Router();

const createUserController = new CreateUsersController();
const createTagController = new CreateTagController();

router.post('/users', createUserController.handle);
router.post('/tags', createTagController.handle);

export default router;