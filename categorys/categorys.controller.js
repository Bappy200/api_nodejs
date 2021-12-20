const categoryService = require('./categorys.service');

module.exports.createCategorys = async function(req, res){
    const category = req.body;
    console.log(category);
    const createdCategory = await categoryService.createCategory(category)
    console.log(category)
    return res.status(200).json(createdCategory);
}

module.exports.getCategorys = async function(req, res){
    const categorys = await categoryService.getCategors();
    return res.json(categorys);
}

module.exports.getCategoryById = async function(req, res){
    const categoryId = req.params.id;
    const category = await categoryService.getCategorById(categoryId)
    return res.json(category);
}

module.exports.updateCategoryById = async function(req, res){
    const categoryId = req.params.id;
    const update = req.body;
    const category = await categoryService.updateCategoryById(categoryId, update);
    return res.json(category);
}

module.exports.deleteCategoryById = async function(req, res){
    const categoryId = req.params;
    const category = await categoryService.deleteCategoryById(categoryId);
    return res.json(category);

}