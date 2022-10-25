import React from "react";
import "../Styles/_loading.scss";

const Loading = () => {
    return (
        <div className="spinner">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <h4>
                <i>Loading...</i>
            </h4>
        </div>
    );
};

export default Loading;
