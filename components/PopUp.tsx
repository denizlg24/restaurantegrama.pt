import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import { IoIosCloseCircle } from "react-icons/io";
const PopUp = ({ closeAction }: { closeAction: () => void }) => {
  return (
    <div className="fixed z-[99] px-4 bg-black bg-opacity-50 top-0 left-0 w-screen h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-white w-full max-w-2xl rounded-xl flex flex-row relative"
      >
        <button
          onClick={() => {
            closeAction();
          }}
          className="absolute top-0 right-0 w-6 h-6 text-black"
        >
          <IoIosCloseCircle className="w-6 h-6 text-black" />
        </button>
        <a
          href="/new_years_menu.pdf"
          target="_blank"
          className="w-full flex-1 md:flex hidden flex-col items-center overflow-hidden"
        >
          <Image
            alt="New years menu"
            className={
              "object-cover w-full p-0 !opacity-100 rounded-none hover:scale-125"
            }
            src="/ano_novo.jpg"
            width={6000}
          />
        </a>
        <div className="w-full flex-1 flex flex-col items-center md:gap-0 gap-6 pt-12 px-6">
          <h1 className="text-4xl font-glacial font-bold text-center w-full">
            FELIZ ANO NOVO!
          </h1>
          <h2 className="text-2xl font-glacial text-center w-full md:mt-12">
            Aproveite o nosso menu Réveillon!
          </h2>
          <a
            onClick={() => {
              closeAction();
            }}
            href="https://reservation.dish.co/widget/hydra-3f9a1251-b309-4000-b131-85c2000a8327"
            target="_blank"
            className="font-glacial md:mt-40 text-white text-4xl bg-black rounded-lg px-4 py-2"
          >
            RESERVAR JÁ!
          </a>
          <a
            href="/new_years_menu.pdf"
            target="_blank"
            className="hover:underline md:mt-0 -mt-6 pb-4"
          >
            Pode consultar o menu aqui.
          </a>
        </div>
      </motion.div>
    </div>
  );
};
export default PopUp;
