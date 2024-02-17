import Image from "next/image";
import Link from "next/link";
import girlimage from "/public/images/female/7.png"
import Button from "../components/Button";

const Uniquedesigner = () => {
    return (
        <div className={'my-8 py-4'}>
            <div className={'flex justify-end'}>
                <div className={'lg:w-1/2  text-[#212121] scroll-m-20 text-xl font-bold tracking-tight lg:text-4xl'}>
                    Unique and Authentic Vintage Designer Jewellery
                </div>
            </div>
            <div className={'flex    py-4 px-2 flex-col lg:flex-row'}>
                <div className={'lg:w-1/2 w-full flex flex-col sm:flex-row gap-2 lg:gap-4'}>
                    <div className={'flex flex-col justify-evenly'}>
                        <Titleheading heading={'Using Good Quality Materials'} text={'Lorem ipsum dolor sit amt, consectetur adipiscing elit.'}/>
                        <Titleheading heading={'Modern Fashion Design'} text={'Lorem ipsum dolor sit amt, consectetur adipiscing elit.'}/>
                        </div>
                    <div className={'flex flex-col justify-evenly'}>
                        <Titleheading heading={'100% Handmade Products'} text={'Lorem ipsum dolor sit amt, consectetur adipiscing elit.'}/>
                        <Titleheading heading={'Discount for Bulk Orders'} text={'Lorem ipsum dolor sit amt, consectetur adipiscing elit.'}/>
                        </div>
                </div>
                <div className={'lg:w-1/2 w-full flex gap-4 flex-col md:flex-row py-4'}>
                    <div className={'lg:w-2/5 w-full self-center'}>
                        <Image src={girlimage} width={284} height={350} alt={'image not found'}/>
                        </div>
                    <div className={'lg:w-3/5 w-full self-center'}>
                        <p className={'leading-7 text-md md:text-lg my-4 [&:not(:first-child)]:mt-6'}>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                        <Link href="/products">
                            <Button type="button" title="See All Product"/>
                        </Link></div>
                </div>
            </div>
        </div>
    )
}

interface TitleheadingProps{
    heading:string;
    text:string;
}
const Titleheading=({heading,text}:TitleheadingProps)=>{
    return(
        <div>
        <h1 className={'scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl'} >{heading}</h1>
            <p className={'leading-7 text-lg my-4 [&:not(:first-child)]:mt-4'}>{text}</p>
        </div>
    )
}

export default Uniquedesigner