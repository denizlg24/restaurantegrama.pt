"use client";
import { Image } from "@nextui-org/react";

const About = () => {
  return (
    <div className="w-full px-4 py-24 bg-primary flex flex-col items-center">
      <div className="w-full max-w-screen-xl flex lg:flex-row flex-col-reverse items-center justify-between lg:gap-24 gap-12">
        <div className="flex-1 w-full flex flex-col items-center relative p-0">
          <Image
            alt="Card background"
            className={
              "object-cover w-full lg:max-w-full max-w-xs !p-0 !opacity-100 rounded-none shadow-lg sm:border-none border-4 border-secondary"
            }
            src="/planta_1.jpg"
            width={6000}
          />
          <div className="sm:block hidden w-full lg:max-w-full max-w-xs h-full absolute bg-transparent -bottom-8 border-[10px] border-secondary translate-x-8"></div>
        </div>
        <div className="flex-[2] flex flex-col items-center w-full">
          <h1 className="font-amsterdam lg:text-8xl text-6xl lg:-translate-x-20  text-secondary lg:mb-1 mb-8">
            About us
          </h1>
          <h2 className="font-capt lg:text-4xl text-2xl text-white font-bold">
            GRAMA RESTAURANTE
          </h2>
          <p className="mt-8 text-content3 font-glacial sm:text-3xl text-xl w-full lg:max-w-full max-w-lg">
            Ao atravessar as portas do Grama, você será transportado para uma
            viagem culinária pelo coração da América do Sul, situada no charmoso
            Porto.
            <br /> Cruze o limiar, inspire profundamente, sinta a brisa,
            refresque-se... e aproveite a experiência única e incomparável que o
            Grama oferece.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
