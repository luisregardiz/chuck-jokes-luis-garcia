import Link from "next/link";
import type { FC } from "react";

export const Navbar: FC = () => {
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
                                Favorites
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
