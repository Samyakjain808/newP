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
  title: "Samyak Jain ✌️",
  description: "Building Intelligent Systems with AI and Full-Stack Engineering.",
  keywords: "Samyak Jain, Frontend Engineer, React Developer, Three.js, Creative Developer, Web Development, Angular, JavaScript, TypeScript, Portfolio",
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
    title: "Samyak Jain - Frontend Engineer",
    description: "Building Intelligent Systems with AI and Full-Stack Engineering.",
    url: "https://new-p-rho.vercel.app",
    siteName: "Samyak Jain's Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://new-p-rho.vercel.app/preview-img.png",
        width: 1200,
        height: 630,
        alt: "Samyak Jain Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samyak Jain - Frontend Engineer",
    description: "Building Intelligent Systems with AI and Full-Stack Engineering.",
    images: ["https://new-p-rho.vercel.app/preview-img.png"],
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
