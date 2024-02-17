import React from 'react'
import { products } from '@/utils/products';
import ProductCard from '@/components/ProductCard';

const getProductsByCategory = (category:string) => {
    return products.filter((product)=>product.category === category)
};

export default function Page({params}: { params: { slug: string } }) {
    const result = getProductsByCategory(params.slug);
    return (
        <div>
            {result.length <= 0 ?  <p className='flex justify-center m-10 text-lg p-10'> No Product Found</p> : 
            (<div className={'cusstomcardcontainer justify-center'}>
                <div className="grid grid-cols-1 place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-2">
                    {result.map((products) => (
                        <ProductCard key={products.id} product={products}/>
                    ))}
                </div>
            </div>)
            }
        </div>
    );
}
