import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const amsterdamFont = localFont({
  src: "./fonts/amsterdamtwottf-ovmee.ttf",
  variable: "--font-amsterdam-two",
  weight: "400",
});
const captCarnaval = localFont({
  src: "./fonts/captcanaveral.ttf",
  variable: "--font-cap-carnaval",
  weight: "900",
});

const glacialIndifference = localFont({
  src: "./fonts/GlacialIndifference-Regular.otf",
  variable: "--font-glacial",
  weight: "400",
});
export const metadata: Metadata = {
  title: "Restaurante Grama",
  description:
    "Bem-vindo ao Restaurante Grama! Saboreie pratos deliciosos feitos com ingredientes frescos em um ambiente acolhedor. Aprecie uma fusão de sabores locais e internacionais. Venha desfrutar de uma experiência gastronómica única!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${amsterdamFont.variable} ${captCarnaval.variable} ${glacialIndifference.variable} antialiased bg-transparent`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
