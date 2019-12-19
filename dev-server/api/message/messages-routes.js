import express from 'express';
const router = express.Router();
import * as controller from './messages-controller';
import * as auth from '../../services/auth-service';

router.post('/message', auth.requireLogin, controller.create);
router.get('/message', auth.requireLogin, controller.index);
router.get('/message/:id', auth.requireLogin, controller.show);
router.put('/message', auth.requireLogin, controller.update);

export default router;