const {createClient} = require("@supabase/supabase-js");
require("dotenv").config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const Recipe = {
  async createRecipe(title, ingredients, preparation_time) {
    const { data, error } = await supabase
      .from('recipes')
      .insert([{ title, ingredients, preparation_time }]).select();
    return { data, error };
  },

  async getAllRecipes() {
    const { data, error } = await supabase
      .from('recipes')
      .select('*');
    return { data, error };
  },

  async getRecipeById(id) {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('id', id)
      .single();
    return { data, error };
  },

  async updateRecipe(id, title, ingredients, preparation_time) {
    const { data, error } = await supabase
      .from('recipes')
      .update({ title, ingredients, preparation_time })
      .eq('id', id).select();
    return { data, error };
  },

  async deleteRecipe(id) {
    const { data, error } = await supabase
      .from('recipes')
      .delete()
      .eq('id', id);
    return { data, error };
  }
};

module.exports = Recipe;