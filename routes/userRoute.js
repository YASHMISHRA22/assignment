const express = require('express');
const router = express.Router();
const { registerUser, loginUser, searchUser } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/search', auth, searchUser);

module.exports = router;
