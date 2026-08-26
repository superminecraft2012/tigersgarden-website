import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Anton, Inter, Italiana } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HolidayToast } from "@/components/HolidayToast";
import { site } from "@/lib/site";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const italiana = Italiana({
  variable: "--font-italiana",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `Thai & Laotian Restaurant in Vancouver, WA · ${site.name}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  icons: {
    icon: [
      { url: "/images/branding/favicon-32x32.png", sizes: "32x32" },
      { url: "/images/branding/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/images/branding/apple-touch-icon.png",
  },
  openGraph: {
    title: `${site.name}, ${site.cuisine}`,
    description: site.tagline,
    images: ["/images/social/og-share-1920x1080.png"],
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Pinch-to-zoom is an accessibility requirement (WCAG 1.4.4 asks for 200%;
  // this allows 500%). Stated explicitly so it cannot be dropped by accident —
  // never set userScalable:false or maximumScale:1 here.
  maximumScale: 5,
  userScalable: true,
  // Lets the page fill the screen on notched devices; the safe-area padding in
  // globals.css keeps content clear of the notch and home indicator.
  viewportFit: "cover",
  themeColor: "#0e0d0c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${italiana.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <HolidayToast />
        <Script
          strategy="afterInteractive"
          data-site="tigers-garden"
          src="https://analytics.dineably.com/public/tracker.js?site=tigers-garden"
        />
      </body>
    </html>
  );
}
