import express from 'express';
const router = express.Router();
import * as controller from './posts-controller';

router.post('/post', controller.create);
router.get('/post', controller.index);
router.get('/post/:id', controller.show);
router.put('/post', controller.update);
router.delete('/post', controller.remove);

export default router;