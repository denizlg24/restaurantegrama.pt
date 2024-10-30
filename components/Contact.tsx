"use client";
import { IoMdMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <div
      id="contacts"
      className="w-full px-4 py-24 bg-content3 flex flex-col items-center"
    >
      <div className="w-full max-w-screen-xl grid grid-cols-2 bg-white rounded-xl shadow-2xl">
        <div className="flex w-full col-span-1 flex-col items-center p-16">
          <h1 className="w-full font-amsterdam text-7xl text-primary text-center mb-24 mt-4">
            Contacts
          </h1>
          <div className="grid grid-cols-10 gap-4 w-full items-center mb-6">
            <IoMdMail className="col-span-1 w-full h-auto aspect-square text-primary" />
            <p className="font-glacial text-3xl text-primary">
              restaurantegrama@gmail.com
            </p>
          </div>
          <div className="grid grid-cols-10 gap-4 w-full items-center">
            <IoLocationOutline className="col-span-1 w-full h-auto aspect-square text-primary" />
            <p className="font-glacial text-3xl text-primary w-max">
              Rua João das Regras, 45, Piso -2
            </p>
          </div>
        </div>
        <div className="flex w-full col-span-1 flex-col items-center bg-primary p-16 rounded-xl gap-8">
          <div className="w-full flex flex-col items-center relative">
            <input
              type="email"
              id="email"
              placeholder="Teu email"
              className="w-full bg-white text-primary p-4 rounded-lg z-20 focus:outline-none font-glacial text-xl"
            />
            <div className="w-full h-full absolute bg-transparent -bottom-2 border-4 rounded-lg border-secondary translate-x-2"></div>
          </div>
          <div className="w-full flex flex-col items-center relative">
            <input
              type="text"
              id="title"
              placeholder="Título"
              className="w-full bg-white text-primary p-4 rounded-lg z-20 focus:outline-none font-glacial text-xl"
            />
            <div className="w-full h-full absolute bg-transparent -bottom-2 border-4 rounded-lg border-secondary translate-x-2"></div>
          </div>
          <div className="w-full flex flex-col items-center relative">
            <textarea
              id="msg"
              placeholder="Como podemos ajudar?"
              className="w-full bg-white text-primary p-4 rounded-lg z-20 h-[300px] resize-none focus:outline-none font-glacial text-xl"
            />
            <div className="w-full h-full absolute bg-transparent -bottom-2 border-4 rounded-lg border-secondary translate-x-2"></div>
          </div>
          <div className="w-full flex flex-col items-center relative pointer-events-none  group">
            <button className="w-full bg-content3 rounded-lg p-4 text-black font-glacial text-2xl group relative z-20 pointer-events-auto">
              Enviar
            </button>
            <div className="w-full h-full absolute bg-transparent -bottom-2 border-4 rounded-lg border-secondary translate-x-2 group-hover:opacity-100 opacity-0 transition-opacity"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
