import React, { useState } from "react";

const Form = ({ handleSubmit, children }) => {
    return (
        <form onSubmit={handleSubmit ? handleSubmit : null}>{children}</form>
    );
};

export default Form;
