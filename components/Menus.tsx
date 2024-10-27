"use client";

import MenuCard from "./MenuCard";

const Menus = () => {
  return (
    <div className="w-full flex flex-col items-center py-24 px-4 bg-[#fbfae4] gap-20">
      <h1 className="text-7xl font-amsterdam text-primary">Menus</h1>
      <div className="w-full max-w-screen-2xl flex flex-col justify-evenly gap-16 xl:flex-row">
        <MenuCard
          href="#"
          src="/breakfast.jpg"
          text="PEQUENO-ALMOÇO"
          className="rotate-90"
        />
        <MenuCard href="#" src="/lunch.jpg" text="ALMOÇO" />
        <MenuCard href="#" src="/dinner.jpg" text="JANTAR" className="" />
      </div>
    </div>
  );
};
export default Menus;
