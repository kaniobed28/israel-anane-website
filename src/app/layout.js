import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load the Geist font with the desired subset and variable.
const geistSans = Geist({
  variable: "--font-geist-sans",  // Custom variable for Geist Sans font
  subsets: ["latin"],            // Define subsets (Latin)
});

// Load the Geist Mono font with the desired subset and variable.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // Custom variable for Geist Mono font
  subsets: ["latin"],           // Define subsets (Latin)
});

// Define metadata for the athlete’s page, such as title, description, and other SEO elements.
export const metadata = {
  title: "Israel Anane Domeh - Olympic Track & Field Athlete", // Dynamic title with the athlete's name
  description: "Official website of Israel Anane Domeh, Olympic Track & Field Athlete specializing in sprinting.",
  keywords: "Israel Anane Domeh, Olympic athlete, track and field, sprinter, athlete profile, sports portfolio",
  author: "Israel Anane Domeh",  // The author's name (athlete)
  openGraph: {
    title: "Israel Anane Domeh - Olympic Athlete",
    description: "Explore the journey and achievements of Israel Anane Domeh, Olympic sprinter.",
    url: "https://israel-anane.netlify.app/", // Replace with the athlete's official website URL
    image: "/israel.jpg", // Replace with the athlete's profile image URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image",  // Twitter card type
    site: "@IsraelAnaneDomeh",    // Replace with athlete's Twitter handle
    title: "Israel Anane Domeh - Olympic Athlete",
    description: "Official site of Israel Anane Domeh, Olympic sprinter.",
    image: "/israel.jpg", // Replace with the athlete's profile image URL
  },
};

// RootLayout component to apply the fonts and wrap the children components.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        {/* Other meta tags and links for production */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
