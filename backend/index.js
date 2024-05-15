const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const router = require('./config/router');
app.use(cors());
app.use(express.json());
app.use('/api',router);
app.listen(process.env.PORT,()=>{
    console.log("Server is Live at PORT: ", process.env.PORT);
})