import React from 'react';
import IngredientItem from './IngredientItem';
import ClaudeRecipe from './ClaudeRecipe';
import { getRecipeFromChefClaude, getRecipeFromMistral } from "./ai"



export default function Main() {

    const [ingredients, setIngredients] = React.useState([]);

    const [recipe, setRecipe] = React.useState(false);

    const getRecipe = async () => {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }
    

    const ingredientItem = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    const formAction = (formData) => {
        const newIngredient = formData.get("ingredient");
        setIngredients(
            prevIngredients => [...prevIngredients, newIngredient]
        )
    }


    return (
        <main>
            <form action={formAction} className="form">
                <input 
                    type="text" 
                    placeholder="e.g. oregano" 
                    araia-label="Add ingredient"
                    name="ingredient"
                    className="form-input"
                />
                <button className="form-btn">
                    Add ingredient
                </button>
            </form>

            {ingredientItem.length > 0 && 
                <IngredientItem 
                    ingredientItem={ingredientItem}
                    getRecipe={getRecipe}
                />
            }
            
            {recipe && 
                <ClaudeRecipe 
                    recipe={recipe}
                />
            }
            
        </main>
    )
}