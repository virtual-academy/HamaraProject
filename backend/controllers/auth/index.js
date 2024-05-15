const express = require('express');
const authRouter = express();
const auth = require('./auth')
authRouter.use('/signup', auth.Signup);


module.exports = authRouter;