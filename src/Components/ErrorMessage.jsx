import React from "react";
import "../Styles/_errorMessage.scss";
const ErrorMessage = ({ message }) => {
    return (
        <div className="errorMessage">
            <h4>
                <i>{message}</i>
            </h4>
        </div>
    );
};

export default ErrorMessage;
