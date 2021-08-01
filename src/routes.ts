import { Router } from 'express';
import { AuthUserController } from './controllers/AuthUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUsersController } from './controllers/CreateUsersController';
import { ensureAdmin } from './middleware/ensureAdmin';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

const createUserController = new CreateUsersController();
const createTagController = new CreateTagController();
const authUserController = new AuthUserController();
const createComplimentController = new CreateComplimentController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post('/login', authUserController.handle)
router.post('/compliments', ensureAuthenticated, createComplimentController.handle)


export default router;