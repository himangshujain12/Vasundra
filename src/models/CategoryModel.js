const { mongoose, Schema, model } = require('mongoose')
const userSchema = Schema({
    category_id: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    vehicle_type: {
        type: String,
        required: true
    },

})

const Category = model("CategoryModel", userSchema)
module.exports = Category