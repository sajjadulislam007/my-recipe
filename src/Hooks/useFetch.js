import { useEffect, useState } from "react";

const useFetch = (url, method = "GET") => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState(null);

    const postData = (postData) => {
        setOptions({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });
    };

    useEffect(() => {
        const fetchController = new AbortController();
        const { signal } = fetchController;
        console.log(fetchController);

        const fetchData = async (fetchOptions) => {
            setIsLoading(true);

            try {
                const response = await fetch(url, { ...fetchOptions, signal });
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();

                setIsLoading(false);
                setData(data);
                setError(null);
            } catch (err) {
                if (err.name === "AbortError") {
                    setError("The Fetch Operation Aborted");
                } else {
                    setIsLoading(false);
                    setError("Could not fetch  the data!");
                }
            }
        };

        if (method === "GET") {
            fetchData();
        }
        if (method === "POST" && options) {
            fetchData(options);
        }

        return () => {
            fetchController.abort();
        };
    }, [url, method, options]);

    return { data, setData, isLoading, error, postData };
};

export default useFetch;
