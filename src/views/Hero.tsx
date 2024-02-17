import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Heroimage from "/public/images/heroimage.webp";
import Link from "next/link";
import bazaar from "/public/images/bazaar.webp";
import bustle from "/public/images/bustle.webp";
import versace from "/public/images/versaceimg.webp";
import instyle from "/public/images/instyle.webp";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <div className={"my-6"}>
          <span className="py-3 px-6  rounded-lg bg-blue-200 text-[#0000ff]   font-semibold text-lg  ">
            Sale 70%
          </span>
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Link href="/products">
          <button
            className={
              "flex gap-x-2 my-4 w-40 text-white bg-[#0f172a] lg:w-56 lg:text-lg  p-2 lg:p-6"
            }
            type="button"
          >
            <ShoppingCart size={26} />
            Start Shopping
          </button>
        </Link>
        <div className=" flex justify-evenly  gap-6 mt-8 py-8">
          <Image src={bazaar} alt="bazaar" />
          <Image src={bustle} alt="bustle" />
          <Image src={versace} alt="versace" />
          <Image src={instyle} alt="instyle" />
        </div>
      </div>
      <div className="w-600 h-600 rounded-full bg-[#FFECE3] transform hover:scale-110 transition-transform duration-300 ease-in-out">
        <Image src={Heroimage} width={700} height={700} alt="hero image" />
      </div>
    </div>
  );
}

export default Hero;
