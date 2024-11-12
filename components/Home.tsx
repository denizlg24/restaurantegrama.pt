"use client";
import { Image } from "@nextui-org/react";
const Home = () => {
  return (
    <div className="bg-background w-full max-h-screen relative flex flex-col items-center justify-center">
      <div className="absolute flex flex-col items-center justify-center z-10 md:scale-100 sm:scale-85 scale-[0.5]">
        <h2 className="font-capt text-7xl text-white font-bold">WELCOME TO</h2>
        <h1 className="font-amsterdam text-[10rem] -mt-28 text-white">Grama</h1>
        <a
          href="https://reservation.dish.co/widget/hydra-3f9a1251-b309-4000-b131-85c2000a8327"
          target="_blank"
          className="font-capt text-white sm:text-5xl text-4xl sm:ml-40 mt-2 ml-32 border-[4px] border-white rounded-lg p-2 px-4 hover:opacity-80 hover:scale-95 transition-all"
        >
          RESERVA A TUA MESA
        </a>
      </div>

      <Image
        width={1920}
        height={1080}
        fallbackSrc={
          <div className="absolute w-full h-full bg-[#3d2a1f] -z-20"></div>
        }
        removeWrapper
        className="object-cover w-full rounded-none max-h-screen brightness-50 -z-10 !transition-none !opacity-100"
        src="/home/home_splash.jpg"
        alt="foto restaurante grama"
      />
    </div>
  );
};

export default Home;
