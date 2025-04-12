"use client";
import { useFavorites } from "@/app/context/favorites-context";
import { useRate } from "@/app/context/rate-context";
import Link from "next/link";
import type { FC } from "react";

export const Navbar: FC = () => {
    const { favorites } = useFavorites();
    const { ratedJokes } = useRate();
    return (
        <header>
            <nav className="h-20 flex items-center justify-center">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-semibold">
                        <Link href="/">Chuck Norris Random Joke</Link>
                    </div>
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                href="/"
                                className="text-white hover:text-gray-400"
                            >
                                New Joke
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/favorites"
                                className="text-white hover:text-gray-400"
                            >
                                Favorites{" "}
                                {favorites.length > 0 && (
                                    <span className="ml-1 text-sm bg-red-500 text-white rounded-full px-2">
                                        {favorites.length}
                                    </span>
                                )}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/rated"
                                className="text-white hover:text-gray-400"
                            >
                                Rated{" "}
                                {ratedJokes.length > 0 && (
                                    <span className="ml-1 text-sm bg-red-500 text-white rounded-full px-2">
                                        {ratedJokes.length}
                                    </span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
