import { LucideHeart, LucideHeartOff } from "lucide-react";
import type { FC } from "react";
import { Loader } from "../loader/loader";

interface CardJokeProps {
    data: {
        id: string;
        value: string;
    };
    loading: boolean;
    error: string | null;
    handleAddFavorite: () => void;
    handleRateJoke: (rating: number) => void;
    jokeRateValue: number;
    rate: number[];
    isFavorite: boolean;
    handleRemoveFavorite: () => void;
}

export const CardJoke: FC<CardJokeProps> = ({
    data,
    loading,
    error,
    handleAddFavorite,
    handleRateJoke,
    handleRemoveFavorite,
    jokeRateValue,
    rate,
    isFavorite,
}) => {
    return (
        <div className="border border-gray-300 rounded-xl p-8 w-full min-h-[250px]">
            {loading && <Loader />}
            {error && <p>{error}</p>}
            {data && !loading && (
                <div className="flex flex-col ">
                    <h2 className="text-xl dark:text-neutral-50 text-neutral-950 text-center font-semibold">
                        {data.value}
                    </h2>
                    <div>
                        {isFavorite ? (
                            <button
                                className="bg-rose-600 text-neutral-50  flex items-center gap-2 mt-4  rounded-full px-4 py-2 hover:bg-rose-700 transition duration-200 cursor-pointer text-sm"
                                onClick={handleRemoveFavorite}
                            >
                                Remove from favorite
                                <LucideHeartOff size={16} />
                            </button>
                        ) : (
                            <button
                                className={` ${
                                    isFavorite && "bg-rose-500 text-neutral-50 "
                                } flex items-center gap-2 mt-4 bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 rounded-full px-4 py-2 hover:bg-rose-500 hover:text-neutral-50 transition duration-200 cursor-pointer text-sm`}
                                onClick={handleAddFavorite}
                            >
                                Add to favorite
                                <LucideHeart size={16} />
                            </button>
                        )}
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 mt-4">
                        <span className="text-sm text-neutral-950 dark:text-neutral-50">
                            Rate this joke:
                        </span>
                        <div className="flex gap-2">
                            {rate.map((r) => (
                                <button
                                    key={r}
                                    className={` ${
                                        jokeRateValue === r &&
                                        "bg-amber-500 text-white"
                                    } border border-gray-300 rounded w-8 py-1 hover:bg-amber-500 hover:text-white text-neutral-950 dark:text-neutral-50 cursor-pointer transition duration-200`}
                                    onClick={() => handleRateJoke(r)}
                                >
                                    {r}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
