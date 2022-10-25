import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import ErrorMessage from "../../ErrorMessage";
import Loading from "../../Loading";
import { useTheme } from "../../../Hooks/useTheme";

//Styles
import "../../../Styles/_searchResult.scss";
import Recipe from "../../Recipe";

const SearchResult = () => {
    const [showDeletButton, setShowDeletButton] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("q");
    const url = `http://localhost:3000/recipes?q=${query}`;
    const { mode } = useTheme();

    const { data: recipes, error, isLoading } = useFetch(url);

    return (
        <>
            <h1 className={`heading ${mode}`}>
                {`${recipes && recipes.length <= 1 ? "Recipe" : "Recipes"}`}{" "}
                Including <span>"{query}"</span>
            </h1>
            <div className="row">
                {error && <ErrorMessage message={error} />}
                {isLoading && <Loading />}
                {recipes && (
                    <Recipe
                        recipes={recipes}
                        showDeletButton={showDeletButton}
                    />
                )}
            </div>
        </>
    );
};

export default SearchResult;
