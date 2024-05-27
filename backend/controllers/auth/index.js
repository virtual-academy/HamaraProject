const express = require('express');
const authRouter = express();
const auth = require('./auth')
authRouter.post('/signup', auth.Signup);
authRouter.get('/getallusers', auth.getAllUsers);



module.exports = authRouter;