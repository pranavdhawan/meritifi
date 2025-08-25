import type { Metadata } from "next";
import { Inter, Balsamiq_Sans, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const balsamiqSans = Balsamiq_Sans({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-balsamiq",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meritifi - Connect with Expert Tutors",
  description: "Meritifi is for all those who want a little more than enough. Connect with expert tutors and achieve your learning goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${balsamiqSans.variable} ${plusJakartaSans.variable} ${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
