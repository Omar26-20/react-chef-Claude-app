
export default function IngredientItem(props) {
    return (
         <section className='main-ingredients'>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live='polite'>
                    {props.ingredientItem}
                </ul>

                {props.ingredientItem.length >= 4 && <div className='main-recipe'>
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button 
                        onClick={props.toggleRecipeShown} 
                        className='main-btn'>
                        Get a recipe
                    </button>
                </div>}

            </section>
    )
}