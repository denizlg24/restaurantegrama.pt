import { Image } from "@nextui-org/react";

const GaleriaImagens = () => {
  return (
    <div className="w-full flex flex-col items-center bg-primary p-12 py-20">
      <div className="w-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 justify-center items-center gap-8 max-w-screen-2xl">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
          return (
            <div
              key={n}
              className="w-full h-full !aspect-square rounded-lg col-span-1 relative"
            >
              <Image
                removeWrapper
                width={500}
                alt="placeholder"
                src={`https://picsum.photos/100${n}`}
                className="w-full h-full !aspect-square rounded-none shadow-xl z-20"
              />
              <div className="sm:block hidden w-full lg:max-w-full max-w-xs h-full absolute bg-transparent -bottom-2 border-[3px] border-secondary translate-x-2"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GaleriaImagens;
