import type { Metadata } from "next";
import "./globals.css";
import PrimaryNavigation from "@/lib/components/primary-navigation";
import AudioPlayerComponent from "@/lib/components/audio-player";
import { openSans } from "@/lib/fonts";



export const metadata: Metadata = {
  title: "Peoples Champ",
  description: "Creative portfolio of original music, DJ mixtapes, and video projects by Nikolai Pohorelsky, also known as Nik at Nite and DJ Zone. Explore continuous mixes, beat tapes and visual work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        {<PrimaryNavigation />}
        {children}
        {<AudioPlayerComponent />}
      </body>
    </html>
  );
}
