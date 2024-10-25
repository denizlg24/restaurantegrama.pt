"use client";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
export default function Home() {
  return (
    <div className="bg-background w-full max-h-screen relative flex flex-col items-center justify-center">
      <div className="absolute flex flex-col items-center justify-center z-10 md:scale-100 sm:scale-85 scale-50">
        <h2 className="font-capt text-6xl text-white font-bold">WELCOME TO</h2>
        <h1 className="font-amsterdam text-[10rem] -mt-24 text-white">Grama</h1>
        <button className="font-capt text-white md:text-6xl sm:text-5xl text-4xl sm:ml-72 mt-8 ml-36 border-[4px] border-white rounded-lg p-2 hover:opacity-80 hover:scale-95 transition-all">
          BOOK A TABLE
        </button>
      </div>
      <Image
        as={NextImage}
        width={1920}
        height={1080}
        removeWrapper
        className="object-cover w-full rounded-none max-h-screen brightness-50 -z-10"
        src="/home/home_splash.jpg"
        alt="foto restaurante grama"
      />
    </div>
  );
}
