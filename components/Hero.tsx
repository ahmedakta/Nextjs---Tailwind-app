import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <section className='max-container padding-container flex flex-col gap-20 
        py-10 pb-32 md:gap-28 lg:py-29 xl:flex-row'>
            <div className='hero-map' />

            {/* Left */}

            <div className='relative z-20 flex flex1 flex-col xl:w-1/2'>
                <Image
                    src="/chef.png"
                    alt="camp"
                    width={50}
                    height={50}
                    className='absolute left-[-10px] top-[-25px] w-10 lg:w-[50px]'
                />
                <h1 className='bold-52 lg:bold-88'>Pizza Island</h1>
                <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>Welcome to Pizza Land, where every slice is a journey to flavor heaven! With over 30 mouthwatering varieties to choose from, our menu is a playground for pizza lovers. Explore our delicious creations crafted with love and premium ingredients. Whether you`&apos;`re craving a classic Margherita or an adventurous BBQ Chicken, we`&apos;`ve got your taste buds covered. Step into Pizza Land and embark on a flavor-packed adventure that`&apos;`ll leave you craving more. Order now and experience the magic of Pizza Land!</p>
                <div className='my-11 flex flex-wrap gap-5'>
                    <div className='flex items-center gap-2'>
                        {Array(5).fill(1).map((_, index) => (
                            <Image
                                src="/star.svg"
                                key={index}
                                alt='star'
                                width={24}
                                height={24}
                            />
                        ))}
                    </div>
                    <p className='bold-16 lg:bold-2 text-blue-70'>
                        198k
                        <span className='regular-16 lg:regular-20 ml-1'>Excellent Reviews</span>
                    </p>
                </div>

                <div className='flex flex-col w-full gap-3 sm:flex-row'>
                    <Button
                        type="button"
                        title="Downolad App"
                        variant="btn_green"
                    />
                    <Button
                        type="button"
                        title="How we work?"
                        icon="/play.svg"
                        variant="btn_white_text"
                    />

                </div>
            </div>
            <div className='relative flex flex-1 items-start'>
                <div className='relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
                    <div className='flex flex-col'>
                        <div className='flexBetween'>
                            <p className='regular-16 text-gray-20'></p>
                            <Image src="/close.svg" alt="close" width={24} height={24} />
                        </div>
                        <h1 className='flexCenter text-white bold-20 mb-5'>NEW !</h1>
                        <p className='bold-20 text-white'>Landinio Pizza</p>
                    </div>
                    <div className='flexBetween'>
                        <div className='flex flex-col'>
                            <p className='regular-16 block text-gray-20'>Order Hotline</p>
                            <p className='bold-20 text-white'>55 11 22</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='regular-16 block text-gray-20'>Delivery</p>
                            <p className='bold-20 text-white'>30-45`&apos;&apos;`</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
