"use client";

import { useFavorites } from "./context/favorites-context";
import useFetch from "./hooks/useFetch";

export default function Home() {
    const { data, loading, error, refetch } = useFetch(
        process.env.NEXT_PUBLIC_CHUCK_NORRIS_API_URL as string
    );
    const { addFavorite } = useFavorites();

    const handleAddFavorite = () => {
        if (data && data.value) {
            addFavorite(data as ChuckNorrisJoke);
        }
    };

    return (
        <div>
            <div className="mt-4">Chuck Norris Joke</div>
            <div className="mt-4">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {data && !loading && (
                    <div>
                        <div>
                            <h2 className="text-xl font-semibold">
                                {data.value}
                            </h2>
                            <button onClick={handleAddFavorite}>
                                Add to favorite
                            </button>
                        </div>
                    </div>
                )}
                <button onClick={refetch}>Generate new joke</button>
            </div>
        </div>
    );
}
