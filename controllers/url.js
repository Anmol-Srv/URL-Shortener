const shortid = require('shortid');
const URL = require('../models/url')

async function handleCreateShortUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({msg:"Url is required!"})
    // console.log(body);
    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url, 
        visitedHistory : [],
    });
    return res.json({_id: shortId});
};

async function redirect(req,res){
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({shortId},{
        $push:{
            visitHistory:{
                timestamp: Date.now(),
            }
        }
    })

    return res.redirect(entry.redirectUrl);
}

async function getVisits(req,res){
    const shortId = req.params.shortId;
    const entry = await URL.findOne({shortId})

    return res.json({
        totalClicks: entry.visitHistory.length,
    });
};

module.exports = {
    handleCreateShortUrl,
    redirect,
    getVisits
}