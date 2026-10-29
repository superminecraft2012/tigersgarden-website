import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Anton, Inter, Italiana } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HappyHourPopup } from "@/components/HappyHourPopup";
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
      { url: "/images/branding/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/branding/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/branding/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/branding/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/images/branding/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-tg-orange focus:px-5 focus:py-3 focus:font-display focus:text-sm focus:uppercase focus:tracking-[0.15em] focus:text-tg-black"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <HappyHourPopup />
        <Script
          strategy="afterInteractive"
          data-site="tigers-garden"
          src="https://analytics.dineably.com/public/tracker.js?site=tigers-garden"
        />
      </body>
    </html>
  );
}
