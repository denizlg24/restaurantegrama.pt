"use client";
import { Image } from "@nextui-org/react";
const MenusHome = () => {
  return (
    <div className="bg-background w-full max-h-screen relative flex flex-col items-center justify-center">
      <div className="absolute flex flex-col items-center justify-center z-10 md:scale-100 sm:scale-85 scale-[0.5]">
        <h2 className="font-capt text-7xl text-white font-bold">OUR</h2>
        <h1 className="font-amsterdam text-[10rem] -mt-28 text-white">Menus</h1>
      </div>

      <Image
        width={1920}
        height={1080}
        fallbackSrc={
          <div className="absolute w-full h-full bg-[#3d2a1f] -z-20"></div>
        }
        removeWrapper
        className="object-cover w-full rounded-none max-h-screen brightness-50 -z-10 !transition-none !opacity-100"
        src="/breakfast.jpg"
        alt="foto restaurante grama"
      />
    </div>
  );
};

export default MenusHome;
