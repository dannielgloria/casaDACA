import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "../styles/globals.css";
import { siteConfig } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: "Casa DACA" }],
  creator: "Casa DACA",
  publisher: "Casa DACA",
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
      "en-US": "/en"
    }
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/assets/historia-instagram.png",
        width: 1254,
        height: 1254,
        alt: "Casa DACA Mezcal artesanal de Oaxaca"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/assets/historia-instagram.png"]
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        {children}
        <div className="noise" aria-hidden="true" />
      </body>
    </html>
  );
}
