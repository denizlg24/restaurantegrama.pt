"use client";

import {
  Divider,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen] = useState(false);
  return (
    <Navbar
      maxWidth="2xl"
      className="fixed top-0 h-28 backdrop-blur-[2px] bg-black/45"
    >
      <NavbarBrand className="lg:flex flex-col gap-1 justify-center items-start text-xl hidden">
        <p className="font-glacial text-white">Rua João das Regras, 45</p>
        <p className="font-glacial text-white">Piso -2, Porto</p>
      </NavbarBrand>
      <NavbarBrand className="lg:hidden flex-row justify-start items-center text-xl flex">
        <a href="/">
          <Image
            src="/grama_logo.png"
            alt="logo_grama"
            width={300}
            height={300}
            className="!w-12 !h-12"
          />
        </a>
      </NavbarBrand>
      <NavbarContent
        className="hidden lg:flex flex-col gap-2 h-max py-1"
        justify="center"
      >
        <Image
          src="/grama_logo.png"
          alt="logo_grama"
          width={300}
          height={300}
          className="w-12 !h-12"
        />
        <div className="flex flex-row items-center gap-8 text-white font-capt text-4xl">
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
        className="lg:flex flex-col gap-1 justify-center items-end text-xl hidden"
      >
        <Link
          href="https://widget.thefork.com/7b428609-237e-4a67-ab1b-63da08e84119"
          target="_blank"
          className="hover:text-white/80 transition-colors text-white"
        >
          Book Now
        </Link>
        <p className="font-glacial text-white">restaurantegrama@gmail.com</p>
      </NavbarContent>
      <NavbarContent className="lg:hidden" justify="end">
        <p className="text-white text-3xl font-capt">NAV</p>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-white"
        />
      </NavbarContent>
      <NavbarMenu className="mt-8 bg-content3 pt-12 px-12">
        <NavbarMenuItem className="z-50">
          <div className="w-full flex flex-col gap-8 items-start">
            <div className="w-full flex flex-col gap-8 items-center text-center">
              <Link
                className="text-4xl font-capt w-full text-primary hover:opacity-80 transition-opacity"
                href="#"
              >
                MENUS
              </Link>
              <Divider className="w-full h-[1px] bg-primary" />
              <Link
                className="text-4xl font-capt w-full text-primary hover:opacity-80 transition-opacity"
                href="#"
              >
                RESERVA
              </Link>
              <Divider className="w-full h-[1px] bg-primary" />
              <Link
                className="text-4xl font-capt w-full text-primary hover:opacity-80 transition-opacity"
                href="#"
              >
                GALERIA
              </Link>
              <Divider className="w-full h-[1px] bg-primary" />
              <Link
                className="text-4xl font-capt w-full text-primary hover:opacity-80 transition-opacity"
                href="#"
              >
                CONTACTO
              </Link>
              <Divider className="w-full h-[1px] bg-primary" />
              <div className="sm:flex-row sm:gap-0 gap-3 flex flex-col w-full justify-between items-center">
                <div className="flex sm:text-base text-sm sm:flex-col flex-row sm:items-start justify-center gap-1">
                  <p className="font-glacial text-primary">
                    Rua João das Regras, 45
                  </p>
                  <p className="font-glacial text-primary">Piso -2, Porto</p>
                </div>
                <Divider className="w-full h-[1px] bg-primary sm:hidden" />
                <div className="flex flex-col sm:text-base text-sm sm:items-end justify-center gap-1">
                  <Link
                    href="https://widget.thefork.com/7b428609-237e-4a67-ab1b-63da08e84119"
                    target="_blank"
                    className="hover:text-primary/80 transition-colors text-primary"
                  >
                    Book Now
                  </Link>
                  <p className="font-glacial text-primary">
                    restaurantegrama@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
