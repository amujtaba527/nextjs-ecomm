import Link from "next/link";
import React from 'react';
import Image from 'next/image';
import { Products } from "@/utils/products";

interface CardProps{
    product:Products
}

const CarouselCard = ({product}:CardProps) => {
  return (
    <div className={'mx-auto'}>
            <div
                className="   transform hover:scale-110 transition-transform duration-300 ease-in-out w-full max-w-[22rem] bg-white border border-gray-200 rounded-lg shadow   ">
                <Link href={`/detailPage/${product.id}`} className={'border-black'}>
                    <div className={'flex justify-center    bg-[#d7d7d9]'}>
                        <Image src={product.images[0]} alt="product" className={'w-full '}/>
                    </div>
                    <div className="px-5 pt-2 pb-5 leading-8 text-center text-black ">
                        <h5 className="text-xl font-semibold tracking-tight  dark:text-white"> {product.name}</h5>
                        <span className="text-xl font-bold  leading-8 ">{product.categoryname}</span>
                    </div>
                </Link>
            </div>
        </div>
  )
}

export default CarouselCard