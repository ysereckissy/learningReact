import Ingredient from './Ingredient'

const IngredientsList = ({list}) =>
    <ul className="ingredients">
        {
            list.map((ingredient, key) =>
                <Ingredient key={key} {...ingredient} />
        )}
    </ul>
export default IngredientsList;