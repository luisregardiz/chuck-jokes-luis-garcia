"use client";

import useFetch from "./hooks/useFetch";

export default function Home() {
    const { data, loading, error, refetch } = useFetch(
        process.env.NEXT_PUBLIC_CHUCK_NORRIS_API_URL as string
    );

    return (
        <div>
            <div className="mt-4">Chuck Norris Joke</div>
            <div className="mt-4">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {data && !loading && (
                    <div className="">
                        <h2 className="text-xl font-semibold">{data.value}</h2>
                        <button onClick={refetch}>Get new joke</button>
                    </div>
                )}
            </div>
        </div>
    );
}
