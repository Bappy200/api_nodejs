const Category = require('./categorys.model');

module.exports.createCategory = async function(catygore){
    return Category.create(catygore);
};

module.exports.getCategors = async function(){
    return Category.find({});
}

module.exports.getCategorById = async function(categoryId){
    return Category.findById(categoryId);
}

module.exports.updateCategoryById = async function(categoryId, update){
    return Category.findByIdAndUpdate(categoryId, update, {new: true});
}

module.exports.deleteCategoryById = async function(categoryId){
    return Category.findByIdAndDelete(categoryId);
}