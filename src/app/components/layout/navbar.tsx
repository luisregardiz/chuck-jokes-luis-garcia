"use client";
import { useFavorites } from "@/app/context/favorites-context";
import { useRate } from "@/app/context/rate-context";
import Image from "next/image";
import Link from "next/link";
import ChuckIcon from "@/app/assets/chuck-app-icon.png";
import type { FC } from "react";
import { useState } from "react";
import { LucideSunMoon } from "lucide-react";
const DarkModeToggle: FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="h-10 w-10  rounded-full bg-gray-200 dark:bg-neutral-800 text-black dark:text-white flex items-center justify-center transition duration-200 hover:bg-gray-300 dark:hover:bg-neutral-700 cursor-pointer mr-4"
            aria-label="Toggle Dark Mode"
        >
            <LucideSunMoon />
        </button>
    );
};
export const Navbar: FC = () => {
    const { favorites } = useFavorites();
    const { ratedJokes } = useRate();
    return (
        <header>
            <nav className="h-20 bg-white dark:bg-black  flex items-center justify-center fixed top-0 w-full">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="dark:text-white text-black font-bold">
                        <Link href="/" className="flex items-center uppercase ">
                            <Image
                                src={ChuckIcon}
                                alt="Chuck Icon"
                                height={64}
                                width={64}
                            />
                            <span className="ml-2">
                                Chuck Norris <br /> Jokes
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-12">
                        <ul className="sm:flex hidden space-x-6 ">
                            <li>
                                <Link href="/" className="nav-item">
                                    New Joke
                                </Link>
                            </li>
                            <li>
                                <Link href="/favorites" className="nav-item">
                                    Favorites{" "}
                                    {favorites.length > 0 && (
                                        <span className="ml-1 text-sm bg-red-500 text-white rounded-full px-2">
                                            {favorites.length}
                                        </span>
                                    )}
                                </Link>
                            </li>
                            <li>
                                <Link href="/rated" className="nav-item">
                                    Rated{" "}
                                    {ratedJokes.length > 0 && (
                                        <span className="ml-1 text-sm bg-red-500 text-white rounded-full px-2">
                                            {ratedJokes.length}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        </ul>
                        <DarkModeToggle />
                    </div>
                </div>
            </nav>
            {/* Mobile Navigation */}
            <div className="bg-white dark:bg-black sm:hidden fixed top-20 w-full">
                <ul className="flex items-center justify-center space-x-6 ">
                    <li>
                        <Link href="/" className="nav-item">
                            New Joke
                        </Link>
                    </li>
                    <li>
                        <Link href="/favorites" className="nav-item">
                            Favorites{" "}
                            {favorites.length > 0 && (
                                <span className="ml-1 text-sm bg-red-500 text-white rounded-full px-2">
                                    {favorites.length}
                                </span>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link href="/rated" className="nav-item">
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
        </header>
    );
};
