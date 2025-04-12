"use client";

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

type RatedJoke = Pick<ChuckNorrisJoke, "id" | "value"> & {
    rating: number;
};

interface RateContextType {
    ratedJokes: RatedJoke[];
    rateJoke: (id: string, value: string, rating: number) => void;
}

const RateContext = createContext<RateContextType | undefined>(undefined);

export const RateProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [ratedJokes, setRatedJokes] = useState<RatedJoke[]>([]);
    const LOCAL_STORAGE_KEY = process.env
        .NEXT_PUBLIC_CHUCK_NORRIS_RATED_LOCAL_STORAGE_KEY as string;

    useEffect(() => {
        const storedRatedJokes = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedRatedJokes) {
            setRatedJokes(JSON.parse(storedRatedJokes));
        }
    }, []);

    const rateJoke = (id: string, value: string, rating: number) => {
        const updatedRatedJokes = [...ratedJokes];
        const existingJokeIndex = updatedRatedJokes.findIndex(
            (j) => j.id === id
        );

        if (existingJokeIndex !== -1) {
            updatedRatedJokes[existingJokeIndex].rating = rating;
        } else {
            updatedRatedJokes.push({ id, value, rating });
        }

        setRatedJokes(updatedRatedJokes);
        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify(updatedRatedJokes)
        );
    };

    return (
        <RateContext.Provider value={{ ratedJokes, rateJoke }}>
            {children}
        </RateContext.Provider>
    );
};

export const useRate = (): RateContextType => {
    const context = useContext(RateContext);
    if (!context) {
        throw new Error("useRateContext must be used within a RateProvider");
    }
    return context;
};
