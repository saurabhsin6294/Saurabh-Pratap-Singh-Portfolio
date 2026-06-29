import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Saurabh Pratap Singh | Full Stack Developer",
  description: "Portfolio of Saurabh Pratap Singh, a Full Stack Web Developer specializing in PHP, Laravel, React.js, and Tailwind CSS.",
  keywords: ["Saurabh Pratap Singh", "Full Stack Developer", "Laravel Developer", "React Developer", "PHP Developer", "eSyncora", "FirstShake", "Gorakhpur", "Lucknow"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-gray-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
