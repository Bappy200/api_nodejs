const express = require('express');
const router = express.Router();
const categoryControler = require('../categorys/categorys.controller');

router.get('/', function(req, res) {
    return res.json({ message: 'App dsfsdf is running'});
  });
router.post('/categorys', categoryControler.createCategorys)
router.get('/categorys', categoryControler.getCategorys)
router.get('/categorys/:id', categoryControler.getCategoryById)
router.put('/categorys/:id', categoryControler.updateCategoryById)
router.delete('/categorys/:id', categoryControler.deleteCategoryById)


module.exports = router