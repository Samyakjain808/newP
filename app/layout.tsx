import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://new-p-rho.vercel.app"),
  title: "Samyak Jain ✌️",
  description: "Full-Stack Developer & AI/ML Developer | Building scalable web applications and intelligent systems.",
  keywords: "Samyak Jain, Full-Stack Developer, AI Developer, ML Developer, React Developer, Three.js, Creative Developer, Web Development, Python, Machine Learning, Deep Learning, Angular, JavaScript, TypeScript, Portfolio",
  authors: [{ name: "Samyak Jain" }],
  creator: "Samyak Jain",
  publisher: "Samyak Jain",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Samyak Jain - Full-Stack Developer & AI/ML Developer",
    description: "Full-Stack Developer & AI/ML Developer | Building scalable web applications and intelligent systems.",
    url: "https://new-p-rho.vercel.app",
    siteName: "Samyak Jain's Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Samyak Jain - Full-Stack Developer & AI/ML Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samyak Jain - Full-Stack Developer & AI/ML Developer",
    description: "Full-Stack Developer & AI/ML Developer | Building scalable web applications and intelligent systems.",
    images: ["/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
