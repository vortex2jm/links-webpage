import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Geist, Noto_Sans } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Clevelares | Links",
  description: "Conecte-se com João.",
  
  openGraph: {
    title: "João Clevelares | Links",
    description: "Conecte-se com João",
    url: "https://links.joaoclev.dev.br",
    siteName: "João - Links",
    images: [
      {
        url: "https://github.com/vortex2jm.png",
        width: 500,
        height: 500,
        alt: "Profile photo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "João Clevelares | Links",
    description: "Conecte-se com João.",
    images: ["https://github.com/vortex2jm.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${notoSans.variable} antialiased`}
      >
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            success: {
              style: {
                background: "#f0f0f0"
              },
              iconTheme: {
                primary: "#000",
                secondary: "#fff"
              }
            }
          }}
        />
      </body>
    </html>
  );
}
