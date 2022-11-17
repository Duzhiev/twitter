const { Router } = require("express");
const { twittController } = require('../controllers/twitts.controller');
const router = Router();

router.post('/twitt', twittController.addTwitt);
router.get('/twitt', twittController.getTwitt);
router.delete('/twitt/:id', twittController.removeTwitt);
router.patch('/twitt/:id', twittController.patchTwitt);
router.patch('/twitt/:twittId/user/:userId', twittController.addLike);
router.patch('/twitt/:twittId/delete/:id', twittController.deleteLike);

module.exports = router;