import React from "react";
import { useParams } from "react-router-dom";

//Firestore
import { projectFireStore } from "../../../firebase/config";
import ErrorMessage from "../../ErrorMessage";
import Loading from "../../Loading";
import { useTheme } from "../../../Hooks/useTheme";
//Styles
import "../../../Styles/_recipeDetails.scss";
import { useState, useEffect } from "react";

const RecipeDetailsPage = () => {
    const { mode } = useTheme();
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        projectFireStore
            .collection("recipes")
            .doc(id)
            .get()
            .then((doc) => {
                if(doc.exists){
                    setIsLoading(false);
                    setRecipe(doc.data())
                }else{
                    setIsLoading(false)
                    setError('could not find the data')
                }
            });
    }, [id]);

    return (
        <>
            {error && <ErrorMessage message={error} />}
            {isLoading && <Loading />}
            {recipe && (
                <div className={`recipe-details ${mode}`}>
                    <h1>{recipe.title}</h1>
                    <p className="cooking-time">{recipe.cookingTime} to make</p>
                    <div className="ingredients">
                        {recipe.ingredients.map((ingredient) => (
                            <span key={ingredient + "abc"}>{ingredient}</span>
                        ))}
                    </div>
                    <p className="method">{recipe.method}</p>
                </div>
            )}
        </>
    );
};

export default RecipeDetailsPage;
