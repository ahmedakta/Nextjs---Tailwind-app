import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/foodLogo.png" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Pizza Perfection Guide</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Delve into the art of pizza perfection with our comprehensive guide. From mastering the perfect crust to creating flavor-packed combinations, unlock insider tips and tricks to elevate your pizza game at home. Whether you're a novice or a seasoned pizza aficionado, our guide is your go-to resource for achieving culinary greatness with every slice.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/pizza_bg2.jpg"
          alt="boat"
          width={1440}
          height={480}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <p className="bold-20 mt-2">Big Boy Pizzzza !</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide