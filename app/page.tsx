"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Galeria from "@/components/Galeria";
import GaleriaImagens from "@/components/GaleriaImagens";
import Home from "@/components/Home";
import Menus from "@/components/Menus";
import { useEffect, useState } from "react";
export default function Page() {
  const [popUps, updatePopups] = useState<unknown[]>([]);
  useEffect(() => {
    updatePopups([]);
  }, []);
  return (
    <>
      {[popUps]}
      <Home />
      <About />
      <Menus />
      <Galeria />
      <GaleriaImagens />
      <Contact />
    </>
  );
}
