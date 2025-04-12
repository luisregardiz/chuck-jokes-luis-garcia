import { useRate } from "@/app/context/rate-context";

import { useState, useMemo } from "react";

export type SortOrder = "asc" | "desc";

export const useSortedRate = () => {
    const { ratedJokes: jokes } = useRate();
    const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

    const sortedJokes = useMemo(() => {
        return [...jokes].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.rating - b.rating;
            } else {
                return b.rating - a.rating;
            }
        });
    }, [jokes, sortOrder]);

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    };

    return { sortedJokes, sortOrder, toggleSortOrder };
};
