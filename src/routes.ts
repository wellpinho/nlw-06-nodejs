import { Router } from 'express';
import { AuthUserController } from './controllers/AuthUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUsersController } from './controllers/CreateUsersController';
import { ensureAdmin } from './middleware/ensureAdmin';

const router = Router();

const createUserController = new CreateUsersController();
const createTagController = new CreateTagController();
const authUserController = new AuthUserController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAdmin, createTagController.handle);
router.post('/login', authUserController.handle)

export default router;