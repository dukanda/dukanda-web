import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import QueryProvider from "@/_module/tanstack-query-config/queryClientProvider";
import ContextProvider from "@/components/(landing page)/context/ContextProvider";
import Head from "next/head";
import favico from "@/app/favicon.ico";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dukanda",
  description: "Dukanda - A sua plataforma de turismo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="shortcut icon" href={"/favicon.ico"} type="image/x-icon" />
      </Head>
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