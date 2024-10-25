"use client";

import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";

const Header = () => {
  return (
    <Navbar
      maxWidth="2xl"
      className="fixed top-0 h-24 backdrop-blur-[2px] bg-black/45"
    >
      <NavbarBrand className="flex flex-col gap-1 justify-center items-start text-xl">
        <p className="font-glacial text-white">Rua João das Regras, 45</p>
        <p className="font-glacial text-white">Piso -2, Porto</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex flex-col gap-2 h-24"
        justify="center"
      >
        <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
        <div className="flex flex-row items-center gap-8 text-white font-capt text-2xl">
          <Link href="#" className="hover:text-white/80 transition-colors">
            MENUS
          </Link>
          <Link href="#" className="hover:text-white/80 transition-colors">
            RESERVA
          </Link>
          <Link href="#" className="hover:text-white/80 transition-colors">
            GALERIA
          </Link>
          <Link href="#" className="hover:text-white/80 transition-colors">
            CONTACTOS
          </Link>
        </div>
      </NavbarContent>
      <NavbarContent
        justify="end"
        className="flex flex-col gap-1 justify-center items-end text-xl"
      >
        <Link
          href="#"
          className="hover:text-white/80 transition-colors text-white"
        >
          Book Now
        </Link>
        <p className="font-glacial text-white">restaurantegrama@gmail.com</p>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
