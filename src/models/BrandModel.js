const { mongoose, Schema, model } = require('mongoose')
const userSchema = Schema({
    brand_id:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    }
})

const Brand = model("BrandModel", userSchema)
module.exports = Brand