import font from "next/font/local"
import { Open_Sans } from "next/font/google";

export const calSans = font({
  src: "./CalSans-Regular.ttf"
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
});