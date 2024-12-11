"use client";

import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";

const MenuCard = ({
  src,
  text,
  href,
  className,
}: {
  className?: string;
  src: string;
  text: string;
  href: string;
}) => {
  return (
    <Card className="py-4 rounded-none bg-white !w-full max-w-sm flex-1 items-center pb-2 px-2 self-center shadow-lg">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className={
            "object-cover !opacity-100 border-[10px] border-primary w-full rounded-none !aspect-square" +
            ` ${className}`
          }
          src={src}
          width={6000}
        />
      </CardBody>
      <CardFooter className="w-full flex flex-col items-center justify-center">
        <Link
          className="text-primary hover:text-black transition-colors text-5xl text-center font-capt"
          href={`${href}-pt.pdf`}
          target="_blank"
        >
          {text}
        </Link>
        <Link
          className="text-primary hover:text-black transition-colors text-2xl text-center font-capt"
          href={`${href}-en.pdf`}
          target="_blank"
        >
          English Version
        </Link>
      </CardFooter>
    </Card>
  );
};
export default MenuCard;
