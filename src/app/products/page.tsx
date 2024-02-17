import React from 'react'
import { products } from '@/utils/products';
import ProductCard from '@/components/ProductCard';

export default function Page() {
    return (
        <div>
            <div className={'cusstomcardcontainer justify-center'}>
                <div className="grid grid-cols-1 place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-2">
                    {products.map((products) => (
                        <ProductCard key={products.id} product={products}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
