import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import QueryProvider from "@/_module/tanstack-query-config/queryClientProvider";
import ContextProvider from "@/components/(landing page)/context/ContextProvider";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dukanda",
  description: "Is a app to help found a good tour in any City!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="Logomark.svg" type="image/x-icon" />
      </head>
      <body className={`antialiased ${inter.className}`}>
        <QueryProvider>
          <ContextProvider>
            <main>
              {children}
            </main>
          </ContextProvider>
        </QueryProvider>
      </body>
    </html>
  );
}