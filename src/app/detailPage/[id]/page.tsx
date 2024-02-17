import Image from 'next/image'
import Badge from '@/components/Badge';
import { ShoppingCart } from "lucide-react";
import { products } from "@/utils/products";
import React from 'react'
import AddRemove from '@/components/AddRemove';

const productDetail = (id: number) => {
    return (
          products.filter((product) => product.id === id)

    )
}



const page = ({params}: { params: { id: string } }) =>{
    const id = parseInt(params.id);
    const result = productDetail(id);
  return (
    <div>
        {result.map((product) => (
                <div key={product.id} className={'p-4'}>
                    <div className={'grid grid-cols-12 gap-6'}>
                        <div className={'lg:col-span-1 col-span-2 flex flex-col gap-4'}>
                        {product.images.slice().map((img, index) => (
  <Image
    key={index}
    src={img}
    alt="Product Image"
    className={'w-full bg-[#d7d7d9]'}
  />
))}

                        </div>
                        <div className={'lg:col-span-7 col-span-10 '}>
                            <Image src={product.images[0]} alt="Product Image" className={'w-full bg-[#d7d7d9]'} width={800} height={600}/>
                        </div>
                        <div className={'lg:col-span-4 col-span-12'}>
                            <div className={'      p-3  '}>
                                <h1 className="text-3xl ">{product.name}</h1>
                                <h2 className="text-2xl font-semibold text-gray-400">{product.categoryname}</h2>
                                <div>
                                    <h3 className="mt-6 text-md font-bold">SELECT SIZE</h3>
                                    <div className="flex gap-x-3 my-3">
                                        < Badge value={'XS'}/>
                                        < Badge value={'S'}/>
                                        < Badge value={'M'}/>
                                        < Badge value={'L'}/>
                                        < Badge value={'XL'}/>
                                    </div>
                                    <div className="flex items-center mt-6 gap-x-3">
                                        <h3 className="text-xl font-bold">Quantity:</h3>
                                        <AddRemove/>
                                    </div>
                                    <div className=" flex gap-3 my-8 items-center">
                                        <button className={'flex gap-x-2  my-4 w-40 text-white bg-[#0f172a] lg:w-40 lg:text-lg  p-2 lg:p-2'}><ShoppingCart size={20}/> Add to Cart</button>
                                        <div className={'font-bold text-2xl'}>${product.price.toFixed(2)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className={'font-bold text-2xl py-8 '}>Product Information</h2>
                        <hr className="border-gray-400 sm:mx-auto"/>
                        <div className={'grid grid-cols-12 py-4'}>
                            <div className={'md:col-span-3 col-span-12'}>
                                <h1 className={'text-[#666] font-bold md:text-lg text-xl uppercase'}>product details </h1>
                            </div>
                            <div className={'md:col-span-9 col-span-12'}>
                                <p className={'  leading-7 text-md md:text-lg my-4 [&:not(:first-child)]:mt-6'}>{product.productDetails}</p>
                            </div>
                        </div>
                        <div className={'grid grid-cols-12 py-4 '}>
                            <div className={'md:col-span-3 col-span-12 '}>
                                <h1 className={'text-[#666] font-bold text-lg uppercase'}>product care</h1>
                            </div>
                            <ul className={'md:col-span-9 col-span-12 list-disc font-semibold text-lg'}>
                                {product.productCare.map((subitem, index) => (
                                    <li key={index}>{subitem}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
    </div>
  )
};
export default page