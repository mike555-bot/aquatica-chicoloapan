import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aquaticachicoloapan.com.mx"),

  title: {
    default: "Aquatica Chicoloapan | Natación y actividades deportivas",
    template: "%s | Aquatica Chicoloapan",
  },

  description:
    "Clases de natación para bebés, niños, jóvenes y adultos en Chicoloapan. También contamos con actividades como Taekwondo, Jazz, Zumba, CrossFit y Yoga.",

  keywords: [
    "Aquatica Chicoloapan",
    "natación Chicoloapan",
    "clases de natación",
    "natación para niños",
    "natación para bebés",
    "natación para adultos",
    "escuela de natación Chicoloapan",
    "Taekwondo Chicoloapan",
    "Zumba Chicoloapan",
    "CrossFit Chicoloapan",
    "Yoga Chicoloapan",
  ],

  authors: [
    {
      name: "Aquatica Chicoloapan",
    },
  ],

  creator: "Aquatica Chicoloapan",

  publisher: "Aquatica Chicoloapan",

  category: "Deportes y bienestar",

  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.aquaticachicoloapan.com.mx",
    siteName: "Aquatica Chicoloapan",

    title: "Aquatica Chicoloapan | Aprende a nadar a tu ritmo",

    description:
      "Clases de natación para bebés, niños, jóvenes y adultos. Conoce nuestros programas, actividades e instalaciones en Chicoloapan.",

    images: [
      {
        url: "/images/hero-aquatica.png",
        width: 1200,
        height: 630,
        alt: "Clases de natación en Aquatica Chicoloapan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aquatica Chicoloapan | Aprende a nadar a tu ritmo",
    description:
      "Natación y actividades deportivas para bebés, niños, jóvenes y adultos en Chicoloapan.",
    images: ["/images/hero-aquatica.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.aquaticachicoloapan.com.mx",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a4a78",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}