'use client'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {FreeMode, Pagination} from 'swiper/modules';
import CarouselCard from '@/components/CarouselCard';
import { products } from '@/utils/products';

const Carousel = () => {
  return (
    <div>
    <p className="text-sm md:text-lg text-[#0000ff] text-center font-semibold">PRODUCTS</p>
    <h2 className={'mb-[2rem] pb-4 scroll-m-20  text-xl text-center font-bold tracking-tight lg:text-4xl'}>Check What We Have</h2>


    <Swiper spaceBetween={20} freeMode={true} modules={[FreeMode, Pagination]}  className={'flex justify-center'}
            breakpoints={{
                992: {
                slidesPerView: 3,
            },
            668: {
                slidesPerView: 2,
            },
            500: {
                slidesPerView: 1,
            },
        }}
    > 
        {products.map((product) => (
            <SwiperSlide key={product.id}><CarouselCard  product={product}/></SwiperSlide>
        ))}
    </Swiper>

</div>
  )
}

export default Carousel