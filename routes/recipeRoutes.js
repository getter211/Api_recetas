const express = require('express');
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} = require('../controllers/recipeController');

const router = express.Router();

router.post('/', createRecipe); // Crear receta
router.get('/', getAllRecipes); // Obtener todas las recetas
router.get('/:id', getRecipeById); // Obtener receta por ID
router.put('/:id', updateRecipe); // Actualizar receta
router.delete('/:id', deleteRecipe); // Eliminar receta

module.exports = router;
