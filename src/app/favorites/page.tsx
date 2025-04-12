"use client";

import { useFavorites } from "../context/favorites-context";

export default function Favorites() {
    const { favorites, removeFavorite } = useFavorites();
    return (
        <div>
            <div className="mt-4">Chuck Norris Joke User</div>
            {favorites.map((joke) => (
                <div key={joke.id} className="mt-4">
                    <h2 className="text-xl font-semibold">{joke.value}</h2>
                    <button
                        onClick={() => removeFavorite(joke)}
                        className="mt-2 text-red-500"
                    >
                        Remove from favorites
                    </button>
                </div>
            ))}
            {favorites.length === 0 && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">No favorites yet</h2>
                </div>
            )}
        </div>
    );
}
