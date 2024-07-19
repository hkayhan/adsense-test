import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AdSense from "../../components/AdSense";
import Head from "next/head";
import Script from "next/script";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <AdSense pId="ca-pub-8034519108259358"/>
          {/*<Script*/}
          {/*    async*/}
          {/*    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8034519108259358`}*/}
          {/*    crossOrigin='anonymous'*/}
          {/*    strategy='afterInteractive'*/}
          {/*/>*/}

      {/*    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8034519108259358"
                  crossOrigin="anonymous"></script>*/}
          <title></title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
