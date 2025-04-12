"use client";

import { useSortedRate } from "./hooks/useSortRate";

export default function Rated() {
    const { sortedJokes, toggleSortOrder, sortOrder } = useSortedRate();
    return (
        <section className="container mx-auto mt-30 mb-20 p-4">
            <div className="mt-4">
                <h1 className="text-3xl text-neutral-950 dark:text-neutral-50 font-bold mb-4">
                    My Rated Jokes
                </h1>
            </div>
            <div className="flex items-center justify-end gap-2 text-sm mb-4">
                <span className="text-neutral-950 dark:text-neutral-50">
                    Sort by:{" "}
                </span>
                <button
                    onClick={toggleSortOrder}
                    className="bg-neutral-100 text-neutral-950 px-4 py-2 rounded-full cursor-pointer hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700 transition duration-200"
                >
                    {sortOrder === "asc"
                        ? "Lowest to Highest Rating"
                        : "Highest to Lowest Rating"}
                </button>
            </div>
            <div className="joke-list">
                {sortedJokes.map((joke) => (
                    <div
                        key={joke.id}
                        className="mt-4 border border-gray-300 rounded-xl p-4 flex flex-col justify-between items-start"
                    >
                        <h2 className="text-lg text-neutral-950 dark:text-neutral-50 font-semibold mb-4">
                            {joke.value}
                        </h2>
                        <div className="flex gap-2 mt-4">
                            {Array.from({ length: 5 }, (_, i) => (
                                <span
                                    key={i}
                                    className={`${
                                        joke.rating === i + 1 &&
                                        "bg-amber-500 text-white"
                                    } border border-gray-300 rounded w-8 py-1  text-neutral-950 dark:text-neutral-50 cursor-default transition duration-200 flex items-center justify-center`}
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
        </section>
    );
}
