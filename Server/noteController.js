require('../server/database');
const Category = require('../server/Category');
const Recipe = require('../server/notes');

exports.homepage = async(req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    
    res.render('index', { title: 'Notes - Home', categories} );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
}

exports.exploreCategoriesById = async(req, res) => { 
  try {
    let categoryId = req.params.id;
    const limitNumber = 20;
    const categoryById = await Recipe.find({ 'category': categoryId }).limit(limitNumber);
    res.render('categories', { title: 'Notes - Categories', categoryById } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
}