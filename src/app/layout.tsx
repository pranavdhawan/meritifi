import type { Metadata } from "next";
import { Lato, Balsamiq_Sans } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const balsamiqSans = Balsamiq_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-balsamiq",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meritifi - Connect with Expert Tutors",
  description:
    "Meritifi is for all those who want a little more than enough. Connect with expert tutors and achieve your learning goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${balsamiqSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
