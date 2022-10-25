// import Trips from "./TripsFetching/Components/Trips";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { useTheme } from "./Hooks/useTheme";

//Pages Component
import CreateRecipe from "./Components/pages/create/CreateRecipe";
import Home from "./Components/pages/home/Home";
import RecipeDetailsPage from "./Components/pages/recipe/RecipeDetailsPage";
import SearchResult from "./Components/pages/search/SearchResult";

function App() {
    const { mode } = useTheme();
    return (
        <div className={`App ${mode}`}>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-recipe" element={<CreateRecipe />} />
                    <Route
                        path="/recipes/:id"
                        element={<RecipeDetailsPage />}
                    />
                    <Route path="/search" element={<SearchResult />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
