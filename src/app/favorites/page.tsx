"use client";

import { LucideHeartOff } from "lucide-react";
import { useFavorites } from "../context/favorites-context";

export default function Favorites() {
    const { favorites, removeFavorite } = useFavorites();
    return (
        <section className="container mx-auto mt-30 mb-20 p-4">
            <div className="mt-4">
                <h1 className="text-3xl text-neutral-950 dark:text-neutral-50 font-bold mb-4">
                    My Favorites Jokes
                </h1>
            </div>
            <div className="joke-list">
                {favorites.map((joke) => (
                    <div
                        key={joke.id}
                        className="mt-4 border border-gray-300 rounded-xl p-4 flex flex-col justify-between items-start"
                    >
                        <h2 className="text-lg text-neutral-950 dark:text-neutral-50 font-semibold mb-4">
                            {joke.value}
                        </h2>
                        <button
                            onClick={() => removeFavorite(joke)}
                            className="bg-rose-500 text-neutral-50  flex items-center gap-2 mt-4  rounded-full px-4 py-2 hover:bg-rose-600 transition duration-200 cursor-pointer text-sm"
                        >
                            Remove from favorites
                            <LucideHeartOff size={16} />
                        </button>
                    </div>
                ))}
            </div>
            {favorites.length === 0 && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">No favorites yet</h2>
                </div>
            )}
        </section>
    );
}
