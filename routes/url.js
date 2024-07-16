const express = require("express");
const {handleCreateShortUrl,redirect,getVisits} = require('../controllers/url')

const router = express.Router();

router.post("/", handleCreateShortUrl);
router.get("/:shortId",redirect);
router.get("/analytics/:shortId",getVisits);

module.exports = router;