import MenusHome from "@/components/MenusHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menus | Restaurante Grama",
  description:
    "Explore o menu do Restaurante Grama, que inclui pequeno-almoço, almoço e jantar, com entradas, pratos principais e sobremesas preparadas com frescura. Descubra os sabores autênticos da nossa cozinha, desde clássicos locais a opções internacionais.",
};

const Page = () => {
  return <MenusHome />;
};

export default Page;
