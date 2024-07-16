const mongoose = require('mongoose');

async function connectMongoDb(path){
    return mongoose.connect(path)
};

module.exports = {
    connectMongoDb,
}