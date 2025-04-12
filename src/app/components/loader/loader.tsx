import type { FC } from "react";
import "./loader.css";
export const Loader: FC = () => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="loader"></div>
        </div>
    );
};
