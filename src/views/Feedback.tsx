import Button from "../components/Button"
import { Input } from "../components/ui/input"

const Feedback = () => {
  return (
    <div className={'flex justify-center md:my-[8rem] mt-8 border/'}>
            <div>
                <h2 className="scroll-m-20  text-center   pb-2 text-3xl font-semibold tracking-tight first:mt-0">Subscribe Our Newsletter</h2>
                <p className="leading-7 [&:not(:first-child)]:mt-2 text-center">Get the latest information and promo offers directly
                </p>
                <div className="flex  items-center space-x-2 mt-4   ">
                <Input placeholder="Input email address" className="h-8" />
                    <Button type="submit" title="Get Started" variant="rounded-full"/>
                </div>
            </div>
        </div>
  )
}

export default Feedback