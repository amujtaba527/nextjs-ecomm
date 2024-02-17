import Carousel from "@/views/Carousel";
import Feedback from "@/views/Feedback";
import Hero from "@/views/Hero";
import Promotion from "@/views/Promotion";
import Unique from "@/views/Unique";


export default function Home() {
  return (
    <div className="min-h-screen mt-10">
      <Hero />
      <Promotion/>
      <Carousel/>
      <Unique/>
      <Feedback/>
    </div>
  );
}