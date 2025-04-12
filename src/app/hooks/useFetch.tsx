import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetch = (url: string) => {
    const [data, setData] = useState<ChuckNorrisJoke>({} as ChuckNorrisJoke);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setError(
                    err.response?.data?.message ||
                        err.message ||
                        "Something went wrong"
                );
            } else {
                setError("An unexpected error occurred");
            }
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
};

export default useFetch;
