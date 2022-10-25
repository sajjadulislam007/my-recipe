import Loading from "../../Loading";
import Recipe from "../../Recipe";
import ErrorMessage from "../../../Components/ErrorMessage";

//Firestore
import { projectFireStore } from "../../../firebase/config";

//Styles
import "../../../Styles/_home.scss";
import { useEffect, useState } from "react";

const Home = () => {
    const [showDeletButton, setShowDeletButton] = useState(true);
    const [recipes, setRecipes] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const unsubs = projectFireStore.collection("recipes").onSnapshot(
            (snapshot) => {
                if (snapshot.empty) {
                    setError("No recipes are there!");
                    setIsLoading(false);
                } else {
                    let results = [];
                    snapshot.docs.forEach((doc) => {
                        results.push({ id: doc.id, ...doc.data() });
                    });
                    setRecipes(results);
                    setIsLoading(false);
                }
            },
            (err) => {
                setError(err.message);
                setIsLoading(false);
            }
        );

        return () => unsubs();
    }, []);

    const handleDelete = (id) => {
        projectFireStore.collection("recipes").doc(id).delete();
    };

    return (
        <div className="content">
            <div className="row lr-20">
                {error && <ErrorMessage message={error} />}
                {isLoading && <Loading />}
                {recipes && (
                    <Recipe
                        recipes={recipes}
                        handleDelete={handleDelete}
                        showDeletButton={showDeletButton}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
