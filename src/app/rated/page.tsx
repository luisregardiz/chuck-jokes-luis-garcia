"use client";

import { useSortedRate } from "./hooks/useSortRate";

export default function Rated() {
    const { sortedJokes, toggleSortOrder, sortOrder } = useSortedRate();
    return (
        <div>
            <div className="mt-4">My Rated Jokes</div>
            <div className="flex justify-end">
                <button
                    onClick={toggleSortOrder}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Sort by:{" "}
                    {sortOrder === "asc"
                        ? "Lowest to Highest Rating"
                        : "Highest to Lowest Rating"}
                </button>
            </div>
            {sortedJokes.map((joke) => (
                <div key={joke.id} className="mt-4">
                    <h2 className="text-xl font-semibold">{joke.value}</h2>
                    <div className="flex gap-2 mt-4">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span
                                key={i}
                                className={`${
                                    joke.rating === i + 1
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200 text-gray-700"
                                } border border-gray-300 rounded px-2 py-1`}
                            >
                                {i + 1}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
            {sortedJokes.length === 0 && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">
                        No rated jokes yet
                    </h2>
                </div>
            )}
        </div>
    );
}
