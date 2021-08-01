import { Router } from 'express';
import { AuthUserController } from './controllers/AuthUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUsersController } from './controllers/CreateUsersController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserReceiverComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListUsersController } from './controllers/ListUsersControllers';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ensureAdmin } from './middleware/ensureAdmin';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

const createUserController = new CreateUsersController();
const createTagController = new CreateTagController();
const authUserController = new AuthUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiverComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post('/login', authUserController.handle)
router.post('/compliments', ensureAuthenticated, createComplimentController.handle)

router.get('/users/compliments/send', ensureAuthenticated, listUserSendComplimentsController.handle)
router.get('/users/compliments/receive', ensureAuthenticated, listUserReceiveComplimentsController.handle)
router.get('/tags', ensureAuthenticated, listTagsController.handle);
router.get('/users', ensureAuthenticated, listUsersController.handle)

export default router;