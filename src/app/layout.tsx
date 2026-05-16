// @ts-ignore
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Noto_Sans, Plus_Jakarta_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt">
      <body
        className={`
          ${notoSans.variable} 
          ${plusJakartaSans.variable} 
          antialiased
        `}
      >
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            success: {
              style: {
                background: "#f0f0f0",
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


export const metadata: Metadata = {
  title: "João Clevelares | Links",
  description: "Conecte-se com João.",
  
  openGraph: {
    title: "João Clevelares | Links",
    description: "Conecte-se com João",
    url: "https://joaoclev.com",
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
