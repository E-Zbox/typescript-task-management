import { Inter, Roboto_Mono, Racing_Sans_One } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const roboto_mono = Roboto_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto-mono",
});

export const racing_sans_one = Racing_Sans_One({
    weight: "400",
    subsets: ["latin"],
    variable: "--racing-sans-one",
});
