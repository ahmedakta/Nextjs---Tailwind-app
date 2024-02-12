import { PRODUCTS } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Menu = () => {
    return (
        <section className='flex-col flex flexCenter overflow-hidden
                bg-feature-bg bg-center bg-no-repeat py-24'>
            <div className='max-container padding-container relative w-full
                justify-end'>
                <div className='z-20 w-full flex-col flexCenter lg:w-[100%]'>
                    <div className='relative'>
                        <Image
                            src="/chef.png"
                            alt='camp'
                            width={50}
                            height={50}
                            className='absolute left-[-12px] top-[-28px] w-10 lg:w-[50px]'
                        />
                        <h2 className='bold-40 lg:bold-64'>Products</h2>
                    </div>

                    <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20'>
                        {PRODUCTS.map((feature) => (
                            <FeatureItem
                                key={feature.title}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                            />
                        ))}
                    </ul>

                </div>

            </div>

        </section>
    )
}
type FeatureItem = {
    title: string
    icon: string
    description: string
}
const FeatureItem = ({ title, icon, description }: FeatureItem) => {
    return (
        <div className='flex w-full flex-1 flex-col items-start'>
            <div className='rounded-full p-4 lg:p-7 bg-green-50'>
                <Image
                    src={icon}
                    alt='map'
                    width={108}
                    height={28}
                />
            </div>
            <h2 className='bold-20 lg:bold-32 mt-5 capizatalize'>
                {title}
            </h2>
            <p className='regular-15 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>
                {description}
            </p>
        </div>
    )
}

export default Menu