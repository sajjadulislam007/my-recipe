import React from "react";
import { useTheme } from "../Hooks/useTheme";

const colors = [
    "lightyellow",
    "lightgreen",
    "lightseagreen",
    "#8ddde2",
    "#0c867c",
];

const ChangeThemeColor = () => {
    const { changeColor, changeMode, mode } = useTheme();

    const handleMode = (e) => {
        if (!e.target.checked) {
            changeMode("light");
        } else {
            changeMode("dark");
        }

        console.log(mode);
    };

    return (
        <div className={`changeThemeColorWrapper ${mode}`}>
            <div className="container">
                <div className="themeColor-mode">
                    <div className="toggle" title="Switch Mode">
                        <label>
                            <input
                                type="checkbox"
                                onClick={handleMode}
                                name=""
                            />
                            <span></span>
                        </label>
                    </div>
                    <div className="themeColor">
                        {colors.map((color) => (
                            <div
                                key={color}
                                onClick={() => changeColor(color)}
                                className={color}
                                style={{ background: color }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeThemeColor;
