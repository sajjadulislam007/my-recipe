//styles
import "../Styles/_input.scss";

const Input = ({
    type,
    placeholder,
    customClass,
    labelClass,
    labelTitle,
    name,
    handleChange,
    handleAddNewIngredients,
    ingredientInput,
}) => {
    return (
        <>
            <label className={labelClass ? labelClass : null}>
                {labelTitle && <span>{labelTitle ? labelTitle : null}</span>}
                <input
                    type={type}
                    placeholder={placeholder}
                    className={`form-control ${customClass}`}
                    name={name}
                    // required
                    ref={ingredientInput}
                    onChange={handleChange}
                />
            </label>
            {name === "ingredient" ? (
                <button
                    className="btn reverse"
                    onClick={handleAddNewIngredients}
                >
                    Add
                </button>
            ) : null}
        </>
    );
};

export default Input;
