const Recipe = require('../models/recipeModel');

const createRecipe = async (req, res) => {
  const { title, ingredients, preparation_time } = req.body;
  if (!title || !ingredients || !preparation_time) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
  }
  const { data, error } = await Recipe.createRecipe(title, ingredients, preparation_time);
  if (error) {
    return res.status(500).json({ message: 'Error al crear la receta.', error });
  }
  res.status(201).json({ message: 'Receta creada exitosamente.', data });
};

const getAllRecipes = async (req, res) => {
  const { data, error } = await Recipe.getAllRecipes();
  console.log("Datos de recetas:", data)
  if (error) {
    return res.status(500).json({ message: 'Error al obtener recetas.', error });
  }
  res.status(200).json({ data });
};

const getRecipeById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await Recipe.getRecipeById(id);
  if (error) {
    return res.status(500).json({ message: 'Error al obtener la receta.', error });
  }
  if (!data) {
    return res.status(404).json({ message: 'Receta no encontrada.' });
  }
  res.status(200).json({ data });
};

const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const { title, ingredients, preparation_time } = req.body;
  const { data, error } = await Recipe.updateRecipe(id, title, ingredients, preparation_time);
  if (error) {
    return res.status(500).json({ message: 'Error al actualizar la receta.', error });
  }
  res.status(200).json({ message: 'Receta actualizada exitosamente.', data });
};

const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await Recipe.deleteRecipe(id);
  if (error) {
    return res.status(500).json({ message: 'Error al eliminar la receta.', error });
  }
  res.status(200).json({ message: 'Receta eliminada exitosamente.', data });
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
};
