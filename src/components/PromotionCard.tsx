import React from "react";
import Image, { StaticImageData } from "next/image";

type PromotionCardProps ={
  name: string;
  originalprice: string;
  discountedprice: string;
  img: StaticImageData;
}

const PromotionCard = ({name, originalprice, discountedprice, img}: PromotionCardProps) => {
  return (
    <>
      <div className={`pt-4 px-2 sm:px-4 text-lg  `}>
        <p>{name}</p>
        <p>
          <span className="line-through text-center">{originalprice} </span>
          <span className={"font-bold ps-1 text-xl"}>${discountedprice} </span>
        </p>
        <div
          className={
            "flex justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out"
          }
        >
          <Image src={img} alt={"image not found"} />
        </div>
      </div>
    </>
  );
};
export default PromotionCard;
