const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//데이터베이스 형식같은거임
const jsonSchema = mongoose.Schema({
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description : {
        type: String
    },
    privacy : {
        type: Number
    },
    filePath : {
        type: String
    },
    category : {
        type: String
    },
    views : {
        type: Number,
        default: 0
    },
    duration : {
        type: String
    },
    thumbnail : {
        type: String
    }
},{timestamp: true})

const Json = mongoose.model('Json', jsonSchema)

module.exports = { Json }