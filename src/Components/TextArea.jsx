import React from "react";

const TextArea = ({
    placeholder,
    customClass,
    labelClass,
    labelTitle,
    name,
    handleChange,
}) => {
    return (
        <label className={labelClass ? labelClass : null}>
            {labelTitle && <span>{labelTitle ? labelTitle : null}</span>}
            <textarea
                placeholder={placeholder}
                className={`form-control ${customClass}`}
                name={name}
                // required
                onChange={handleChange}
            />
        </label>
    );
};

export default TextArea;
