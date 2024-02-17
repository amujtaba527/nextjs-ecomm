import { APP_LINKS } from "@/utils/constant";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Menu } from 'lucide-react';

function Header() {
  return (
    <div className="p-5 flex justify-between items-center">
      <div>
        <Link href={"/"}>
        <Image
          src={"/images/Logo.webp"}
          alt="logo-image"
          width={100}
          height={53}
        />
        </Link>
      </div>
      <div className="hidden lg:inline-flex gap-10 items-center ">
        {APP_LINKS.map((link) => (
          <Link href={link.href} key={link.key}>
            <p className="font-semibold">{link.name}</p>
          </Link>
        ))}
      </div>
      <div className="hidden lg:inline-flex">
        <Input placeholder="Search Products" className="h-8" />
      </div>
      <div className="hidden lg:inline-flex w-10 h-10 rounded-full bg-slate-200 justify-center items-center relative">
        <div className="w-4 h-4 rounded-full flex justify-center items-center bg-red-500 absolute right-1 top-0">
          <p className="text-white text-xs">0</p>
        </div>
        <ShoppingCart />
      </div>
      <div className="inline-flex lg:hidden">
      <Menu />
      </div>
    </div>
  );
}

export default Header;