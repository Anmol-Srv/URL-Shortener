const express = require("express");
const router = express.Router();
const {handleCreateShortUrl} = require('../controllers/url')

router.route('/')
.post(handleCreateShortUrl)