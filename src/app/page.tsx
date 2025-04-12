"use client";

import { useFavorites } from "./context/favorites-context";
import { useRate } from "./context/rate-context";
import useFetch from "./hooks/useFetch";
import { CardJoke } from "./components/card/card-joke";

export default function Home() {
    const { data, loading, error, refetch } = useFetch(
        process.env.NEXT_PUBLIC_CHUCK_NORRIS_API_URL as string
    );
    const { addFavorite, removeFavorite, favorites } = useFavorites();
    const { rateJoke, ratedJokes } = useRate();

    const handleAddFavorite = () => {
        if (data && data.value) {
            addFavorite(data as ChuckNorrisJoke);
        }
    };

    const handleRemoveFavorite = () => {
        if (data && data.value) {
            removeFavorite(data as ChuckNorrisJoke);
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

    const isFavorite = favorites.some((joke) => joke.id === data.id);

    return (
        <section className="max-w-2xl mx-auto ">
            <div className="h-screen flex flex-col justify-center items-center">
                <CardJoke
                    rate={rate}
                    data={data}
                    loading={loading}
                    error={error}
                    handleAddFavorite={handleAddFavorite}
                    handleRateJoke={handleRateJoke}
                    handleRemoveFavorite={handleRemoveFavorite}
                    jokeRateValue={jokeRateValue}
                    isFavorite={isFavorite}
                />

                <button
                    onClick={refetch}
                    className="bg-neutral-100  font-semibold dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 rounded-full px-4 py-2 mt-4 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition duration-200 cursor-pointer"
                >
                    Generate new joke
                </button>
            </div>
        </section>
    );
}
