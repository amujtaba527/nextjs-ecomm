import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Products } from "@/utils/products";

interface CardProps{
    product:Products
}


const ProductCard = ({product}:CardProps) => {
  return (
    <div className="transform hover:scale-110 transition-transform duration-300 ease-in-out w-full max-w-[18rem] bg-white border border-gray-200 rounded-xl shadow">
        <Link href={`/detailPage/${product.id}`} className={'border-black'}>
            <div className={'flex justify-center  bg-[#d7d7d9]'}>
                <Image src={product.images[0]} alt="product" className={'w-full'}/>
            </div>
            <div className="px-5 pb-5 leading-8">
                <h5 className="text-xl font-semibold tracking-tight text-[#212121] pt-2"> {product.name}</h5>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-[#888888] leading-8 ">{product.categoryname}</span>
                        <span className="text-2xl font-bold text-gray-900  leading-8">${product.price}</span>
                    </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard