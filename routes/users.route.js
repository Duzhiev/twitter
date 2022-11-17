const { Router } = require('express');
const { userController } = require('../controllers/users.controller');
const router = Router();

router.post('/twitt/user', userController.addUser);
router.get('/twitt/user', userController.getUser);
router.delete('/twitt/user/:id', userController.removeUser);
router.patch('/twitt/user/:id', userController.patchUser);
router.patch('/twitt/user/:userId/saved/:savedId', userController.addSaved);
router.patch('/twitt/user/:userId/remove/:removeId', userController.removeSaved);

module.exports = router;