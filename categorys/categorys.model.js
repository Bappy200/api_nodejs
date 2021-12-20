const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    categorysTitle:{
        type: String,
        required: true,
    },
    about:{
        type: String,
        required: true,
    },
},
{
    timestamps: true,
    versionKey: false,
});

module.exports = mongoose.model('Category', categorySchema);