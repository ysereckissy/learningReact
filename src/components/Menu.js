import Recipe from './Recipe'
import '../styles/Menu.css'

const Menu = ({recipes}) =>
    <article>
        <header>
            <h1>
                Delicious Recipes
            </h1>
        </header>
        <div className="recipes">
            {
                recipes.map((recipe, key) => 
                    <Recipe key={key} {...recipe} />
            )}
        </div>
    </article>

export default Menu;