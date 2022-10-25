import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../Hooks/useTheme";
import { useNavigate } from "react-router-dom";

//styles
import "../Styles/_navbar.scss";
import ChangeThemeColor from "./ChangeThemeColor";

const Navbar = () => {
    const [searchValue, setSearchValue] = useState("");
    const { color, mode } = useTheme();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${searchValue}`);
    };

    return (
        <>
            <nav className={`navbar`} style={{ background: color }}>
                <div className="container">
                    <div className="navContent">
                        <Link className="navbar-brand" to="/">
                            <h1>My Recipe</h1>
                        </Link>
                        <div className="searchBar-menu">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Search Recipe..."
                                    className="search"
                                    onChange={(e) =>
                                        setSearchValue(e.target.value)
                                    }
                                />
                            </form>
                            <Link
                                className="btn btn-primary"
                                to="/create-recipe"
                            >
                                Create Recipe
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <ChangeThemeColor />
        </>
    );
};

export default Navbar;
