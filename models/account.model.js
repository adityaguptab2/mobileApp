const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
    accountName:
    {
        type: String
    },
    accountId:
    {
        type: String,
        default: 'Assigned'
    },
    website: {
        type: Array,
        required: true
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    intent_level: {
        type: String
    },
    engagement_level: {
        type: String
    },
    industry: {
        type: String
    },
    owner: {
        type:String
    }
}, {
    timestamps: true
})


const Account = mongoose.model('Account', AccountSchema)

module.exports = Account