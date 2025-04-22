import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import Image from "next/image";
import headerData from "@/data/headerData";


const { logo } = headerData;

export const Sheets = ({ children, content, tittle, openDirection, isTitle }: { children: React.ReactNode; tittle?: string; content?: React.ReactNode; openDirection: "top" | "bottom" | "left" | "right" | null | undefined, isTitle?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[90%] h-full" side={openDirection}>
        <SheetHeader>
          <SheetTitle className="text-center text-xl w-full flex items-center justify-between">
            {
              isTitle ? (tittle) : (
                <Link href="/" className="flex items-center justify-between  " passHref>
                  <Image src={logo.src} width={160} height={50} alt="Logo" priority />
                </Link>
              )
            }
          </SheetTitle>
          <SheetDescription className="w-full h-full">
            <SheetClose className="w-full h-full p-0">
              {content}
            </SheetClose>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
