import Hero from "@/components/Hero";
import Camp from "@/components/Camp";
import Guide from "@/components/Guide";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Image from "next/image";
import Button from "@/components/Button";

export default function Contact() {
    return (
        <section className="max-container bg-feature-bg padding-container flex flex-col gap-20 
        py-10 pb-32 md:gap-28 lg:py-29 xl:flex-row ">
            <div className="relative z-20 flex flex1 flex-col xl:w-1/2">
                <Image
                    src="/chef.png"
                    alt="camp"
                    width={50}
                    height={50}
                    className='absolute left-[-10px] z-5 top-[-30px] w-10 lg:w-[50px]'
                />
                <h1 className='bold-52 z-0 lg:bold-50'>Contact Us</h1>
                <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>Need assistance or have a question? Reach out to us! Simply fill out the form below, and we'll get back to you ASAP. You can also call us at <span className="bold-20 text-red-500 underline">555 22 33</span> during business hours. Thanks for choosing us for your pizza fix!</p>
            </div>
            <div className="relative  flex flex-1 items-start">
                <form action="" className="relative z-20 flex w-[468px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
                    <input type="text" name="name" id="" className="rounded p-1 text-center font-mono float-left" placeholder="Your Name" required />
                    <input type="email" name="email" id="" className="rounded p-1 text-center font-mono " placeholder="Your E-mail" />
                    <textarea name="message" cols={4} rows={4} id="" className="rounded p-1 text-center font-mono " placeholder="Your Message" />
                    <div className='flexCenter flex-col  sm:flex-row'>
                        <Button
                            type="submit"
                            title="Submit"
                            variant="btn_green"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
}