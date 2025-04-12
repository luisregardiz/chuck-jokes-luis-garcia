"use client";

import { useFavorites } from "./context/favorites-context";
import { useRate } from "./context/rate-context";
import useFetch from "./hooks/useFetch";

export default function Home() {
    const { data, loading, error, refetch } = useFetch(
        process.env.NEXT_PUBLIC_CHUCK_NORRIS_API_URL as string
    );
    const { addFavorite } = useFavorites();
    const { rateJoke, ratedJokes } = useRate();

    const handleAddFavorite = () => {
        if (data && data.value) {
            addFavorite(data as ChuckNorrisJoke);
        }
    };

    const handleRateJoke = (rating: number) => {
        if (data && data.value) {
            rateJoke(data.id, data.value, rating);
        }
    };

    const getRateValue = (id: string) => {
        const ratedJoke = ratedJokes.find((j) => j.id === id);
        return ratedJoke ? ratedJoke.rating : 0;
    };

    const jokeRateValue = getRateValue(data.id);

    const rate = Array.from({ length: 5 }, (_, i) => i + 1);

    return (
        <div>
            <div className="mt-4">Chuck Norris Joke</div>
            <div className="mt-4">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {data && !loading && (
                    <div>
                        <div className="flex flex-col ">
                            <h2 className="text-xl font-semibold">
                                {data.value}
                            </h2>
                            <div>
                                <button onClick={handleAddFavorite}>
                                    Add to favorite
                                </button>
                            </div>
                            <div className="flex gap-2 mt-4">
                                {rate.map((r) => (
                                    <button
                                        key={r}
                                        className={` ${
                                            jokeRateValue === r &&
                                            "bg-blue-500 text-white"
                                        } border border-gray-300 rounded px-2 py-1 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200`}
                                        onClick={() => handleRateJoke(r)}
                                    >
                                        {r}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                <button onClick={refetch}>Generate new joke</button>
            </div>
        </div>
    );
}
