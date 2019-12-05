import express from 'express';
const router = express.Router();

router.post('/post', (req, res) => {
    res.send('post.post - create a post');
});
router.get('/post', (req, res) => {
    res.send('get.post - get all posts');
});
router.get('/post/:id', (req, res) => {
    res.send('get.post - get post by id');
});
router.put('/post', (req, res) => {
    res.send('put.post - update a post');
});
router.delete('/post', (req, res) => {
    res.send('delete.post - delete a post');
});

export default router;