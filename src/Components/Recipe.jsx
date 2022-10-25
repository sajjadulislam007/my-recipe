import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { useTheme } from "../Hooks/useTheme";
//Styles
import "../Styles/_recipe.scss";

const Recipe = ({ recipes, handleDelete, showDeletButton }) => {
    const { mode } = useTheme();
    if (recipes.length === 0) {
        return <p className="error">There is no Recipes!</p>;
    }

    return (
        <>
            <p className={recipes.length >= 1 ? "success" : "warning"}>{`${
                recipes.length === 0
                    ? "There is no  Recipes"
                    : recipes.length <= 1
                    ? `There is only ${recipes.length} Recipe`
                    : `There are total ${recipes.length} Recipes`
            } ${mode}`}</p>
            {recipes.map((recipe) => (
                <div
                    key={recipe.id}
                    className="col-xs-12 col-sm-6 col-lg-4 hover-effect"
                >
                    <div className={`recipe ${mode}`}>
                        <h2>{recipe.title}</h2>
                        <p className="cooking-time">
                            {recipe.cookingTime} to make
                        </p>
                        <div className="ingredients">
                            {recipe.ingredients.map((ingredient) => (
                                <span key={ingredient}>{ingredient}</span>
                            ))}
                        </div>
                        <p className="method">
                            {recipe.method.substring(0, 100)}...
                        </p>
                        <Link className="btn" to={`/recipes/${recipe.id}`}>
                            Recipe Details
                        </Link>
                        {showDeletButton ? (
                            <button
                                onClick={() => {
                                    handleDelete(recipe.id);
                                }}
                                className="delete"
                            >
                                <FaTrashAlt />
                            </button>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Recipe;
