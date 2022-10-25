import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../Hooks/useTheme";

//Firestore
import { projectFireStore } from "../../../firebase/config";

//Styles
import "../../../Styles/_createRecipe.scss";
import Form from "../../Form";
import Input from "../../Input";
import TextArea from "../../TextArea";

const CreateRecipe = () => {
    const [title, setTitle] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [method, setMethod] = useState("");
    const [newIngredient, setNewIngredient] = useState("");
    const [arrayOfingredients, setArrayOfingredients] = useState([]);
    const ingredientInput = useRef(null);
    const navigate = useNavigate();
    const { mode } = useTheme();

    const handleChange = (e) => {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        } else if (e.target.name === "cookingTime") {
            setCookingTime(e.target.value);
        } else if (e.target.name === "method") {
            setMethod(e.target.value);
        } else if (e.target.name === "ingredient") {
            setNewIngredient(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const doc = {
            title,
            ingredients: arrayOfingredients,
            method,
            cookingTime: cookingTime + " minutes",
        };

        try {
            await projectFireStore.collection("recipes").add(doc);
            navigate("/");
        } catch (err) {
            console.log(err);
        }

        e.target.reset();
    };

    const handleAddNewIngredients = (e) => {
        e.preventDefault();

        const trimedIngredient = newIngredient.trim();

        if (
            trimedIngredient &&
            !arrayOfingredients.includes(trimedIngredient)
        ) {
            setArrayOfingredients((prevIng) => [...prevIng, trimedIngredient]);
        }
        ingredientInput.current.focus();
    };

    return (
        <div className="create-page">
            <h1 className="title">Add a New Recipe</h1>
            <Form handleSubmit={handleSubmit}>
                <Input
                    name="title"
                    type="text"
                    placeholder="Recipe Title"
                    customClass="title"
                    labelClass="title-lebel"
                    labelTitle="Title"
                    value={title}
                    handleChange={handleChange}
                />
                <Input
                    name="cookingTime"
                    type="number"
                    placeholder="Cooking Time in Minutes"
                    customClass="cooking-time-input"
                    labelClass="cooking-time-lebel"
                    labelTitle="Cooking Time"
                    value={cookingTime}
                    handleChange={handleChange}
                />
                <div className="ingredient-input-outer">
                    <div className="ingredient-input-inner">
                        <Input
                            name="ingredient"
                            type="text"
                            placeholder="Cooking Ingredients"
                            customClass="cooking-ingredient-input"
                            labelClass="cooking-ingredient-lebel"
                            labelTitle="Cooking Ingredients"
                            value={newIngredient}
                            handleChange={handleChange}
                            handleAddNewIngredients={handleAddNewIngredients}
                            ingredientInput={ingredientInput}
                        />
                    </div>
                    <p className={mode}>
                        Current ingredients:{" "}
                        {arrayOfingredients &&
                            arrayOfingredients.map((item) => (
                                <span key={item} className="newIngredients">
                                    {item},{" "}
                                </span>
                            ))}
                    </p>
                </div>
                <TextArea
                    name="method"
                    placeholder="Write Cooking Method Here..."
                    customClass="cooking-method"
                    labelClass="cooking-method-lebel"
                    labelTitle="Cooking Method"
                    value={method}
                    handleChange={handleChange}
                />

                <button type="submit" className="btn reverse">
                    Submit Recipe
                </button>
            </Form>
        </div>
    );
};

export default CreateRecipe;
