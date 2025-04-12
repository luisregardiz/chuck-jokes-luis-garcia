"use client";
import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

interface FavoriteJokesContextType {
    favorites: ChuckNorrisJoke[];
    addFavorite: (joke: ChuckNorrisJoke) => void;
    removeFavorite: (joke: ChuckNorrisJoke) => void;
}

const FavoritesContext = createContext<FavoriteJokesContextType | undefined>(
    undefined
);

const LOCAL_STORAGE_KEY = process.env
    .NEXT_PUBLIC_CHUCK_NORRIS_LOCAL_STORAGE_KEY as string;

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<ChuckNorrisJoke[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (joke: ChuckNorrisJoke) => {
        if (!favorites.some((fav) => fav.id === joke.id)) {
            setFavorites((prev) => [...prev, joke]);
        }
    };

    const removeFavorite = (joke: ChuckNorrisJoke) => {
        setFavorites((prev) => prev.filter((fav) => fav.id !== joke.id));
    };

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = (): FavoriteJokesContextType => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
};
