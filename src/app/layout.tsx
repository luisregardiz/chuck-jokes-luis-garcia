import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/navbar";
import { FavoritesProvider } from "./context/favorites-context";
import { RateProvider } from "./context/rate-context";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Chuck Norris Random Joke",
    description: "Get a random Chuck Norris joke",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} bg-white dark:bg-black  antialiased`}
            >
                <FavoritesProvider>
                    <RateProvider>
                        <Navbar />
                        {children}
                    </RateProvider>
                </FavoritesProvider>
            </body>
        </html>
    );
}
