import About from "@/components/About";
import Contact from "@/components/Contact";
import Galeria from "@/components/Galeria";
import GaleriaImagens from "@/components/GaleriaImagens";
import Home from "@/components/Home";
import Menus from "@/components/Menus";
export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Menus />
      <Galeria />
      <GaleriaImagens />
      <Contact />
    </>
  );
}
