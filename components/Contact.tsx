"use client";
import { IoMdMail } from "react-icons/io";
import { IoLocationOutline, IoLogoInstagram } from "react-icons/io5";
import { useState } from "react";
import sendEmail from "@/app/actions/sendEmail";
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    email: "",
    subject: "",
    body: "",
  });
  return (
    <div
      id="contacts"
      className="w-full px-4 py-24 bg-content3 flex flex-col items-center"
    >
      <div className="w-full max-w-screen-xl xl:grid grid-cols-2 flex flex-col bg-white rounded-xl shadow-2xl">
        <div className="flex w-full col-span-1 flex-col items-center sm:px-16 px-8 py-16">
          <h1 className="w-full font-amsterdam md:text-7xl text-5xl text-primary text-center mb-24 mt-4">
            Contacts
          </h1>
          <div className="flex flex-row justify-start gap-4 w-full items-center mb-6">
            <IoMdMail className="w-8 min-w-8 h-8 aspect-square text-primary" />
            <p className="font-glacial sm:text-3xl text-base text-primary w-full break-words">
              restaurantegrama@gmail.com
            </p>
          </div>
          <div className="flex flex-row justify-start gap-4 w-full items-center mb-6">
            <IoLocationOutline className="w-8 min-w-8 h-8 aspect-square text-primary" />
            <p className="font-glacial sm:text-3xl text-base text-primary w-full break-words">
              Rua João das Regras, 45, Piso -2
            </p>
          </div>
          <a
            href="https://instagram.com/grama.restaurante"
            target="_blank"
            className="flex flex-row justify-start gap-4 w-full items-center"
          >
            <IoLogoInstagram className="w-8 min-w-8 h-8 aspect-square text-primary" />
            <p className="font-glacial sm:text-3xl text-base text-primary w-full break-words">
              grama.restaurante
            </p>
          </a>
        </div>
        <div className="flex w-full col-span-1 flex-col items-center bg-primary sm:px-16 px-8 py-16 rounded-xl gap-8">
          <div className="w-full flex flex-col items-center relative">
            <input
              type="email"
              id="email"
              value={userInput.email}
              onChange={(e) => {
                setUserInput((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
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
              value={userInput.subject}
              onChange={(e) => {
                setUserInput((prev) => {
                  return { ...prev, subject: e.target.value };
                });
              }}
              className="w-full bg-white text-primary p-4 rounded-lg z-20 focus:outline-none font-glacial text-xl"
            />
            <div className="w-full h-full absolute bg-transparent -bottom-2 border-4 rounded-lg border-secondary translate-x-2"></div>
          </div>
          <div className="w-full flex flex-col items-center relative">
            <textarea
              id="msg"
              placeholder="Como podemos ajudar?"
              value={userInput.body}
              onChange={(e) => {
                setUserInput((prev) => {
                  return { ...prev, body: e.target.value };
                });
              }}
              className="w-full bg-white text-primary p-4 rounded-lg z-20 h-[300px] resize-none focus:outline-none font-glacial text-xl"
            />
            <div className="w-full h-full absolute bg-transparent -bottom-2 border-4 rounded-lg border-secondary translate-x-2"></div>
          </div>
          <div className="w-full flex flex-col items-center relative pointer-events-none  group">
            <button
              onClick={async () => {
                setIsLoading(true);
                await sendEmail(userInput);
                setUserInput({ email: "", body: "", subject: "" });
                setIsLoading(false);
              }}
              disabled={isLoading}
              className="w-full bg-content3 rounded-lg p-4 text-black font-glacial text-2xl group relative z-20 pointer-events-auto"
            >
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
            <div className="w-full h-full absolute bg-transparent -bottom-2 border-4 rounded-lg border-secondary translate-x-2 group-hover:opacity-100 opacity-0 transition-opacity"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
