const { Router } = require('express');
const { commentController } = require('../controllers/comments.controller');
const router = Router();

router.post('/twitt/comment', commentController.addComment);
router.get('/twitt/comment', commentController.getComment);
router.delete('/twitt/comment/:id', commentController.removeComment);

module.exports = router;