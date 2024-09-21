import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const About = () => {
    return (
        <section className='bg-neutral-100 py-20'>
            <div className="mx-auto lg:w-[1280px] grid lg:grid-cols-5 gap-6 items-center">
                <div className='flex flex-col gap-4 lg:col-span-2'>
                    <h3 className='bg-sky-100 text-sky-500 rounded py-3 px-4 w-max'>About Us</h3>
                    <h4 className='font-bold text-3xl'>Lorem Ipsum Dolor</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ad maiores debitis nemo eaque inventore iure! Deleniti minus nulla aspernatur magni, nisi voluptates odit voluptatibus tenetur, eos distinctio nihil officiis?</p>
                    <button className='bg-sky-500 hover:bg-sky-700 text-white py-2 pl-6 pr-8 rounded tracking-[2px] mt-4 w-max flex items-center gap-2 group'>
                        Pilih Paket <Icon icon="bi:arrow-right" className='text-white text-xl relative left-0 duration-300 group-hover:left-2' />
                    </button>
                </div>
                <div className='flex items-end gap-4 lg:col-span-3'>
                    <div className='bg-cover bg-center bg-no-repeat relative px-10 py-12 rounded-xl w-full group overflow-hidden' style={{ backgroundImage: `url("/assets/images/item1.png")` }}>
                        <div className='absolute inset-0 bg-black/30' />
                        <div className="relative z-10">
                            <div className='w-20 h-20 rounded-full group-hover:bg-sky-500 bg-transparent flex items-center justify-center duration-300'>
                                <Icon icon="oui:copy-clipboard" className='text-sky-500 group-hover:text-white text-3xl' />
                            </div>
                            <h3 className='font-semibold text-2xl mt-6 mb-2 text-white'>Lorem Ipsum</h3>
                            <p className='text-white'>Pengunjung Objek Wisata Arung Sungai Kopu dapat melakukan kegiatan olahraga arung jeram dengan panjang lintasan 7
                                kilometer dan jarak tempuh 1,5 jam sambil menikmati keindahan Air Sungai Kopu yang jernih, sejuk, dan dijamin bersih karena
                                tidak ada aktivitas pembuangan limbah di bagian hulu sungai.</p>
                        </div>
                    </div>
                    <div className='bg-cover bg-center bg-no-repeat relative w-full group px-10 py-12 rounded-xl overflow-hidden' style={{ backgroundImage: `url("/assets/images/item2.jpg")` }}>
                        <div className='absolute inset-0 bg-black/30' />
                        <div className="relative z-10">
                            <div className='w-20 h-20 rounded-full group-hover:bg-sky-500 bg-transparent flex items-center justify-center duration-300'>
                                <Icon icon="f7:building-2" className='text-sky-500 group-hover:text-white text-3xl' />
                            </div>
                            <h3 className='font-semibold text-2xl mt-6 mb-2 text-white'>Lorem Ipsum</h3>
                            <p className='text-white'>Di sepanjang lintasan arung jeram, pengunjung juga bisa menikmati pemandangan alam, diantaranya berbagai
                                bentuk bebatuan di dinding yang berada di sepanjang sungai. Kemudian pengunjung juga bisa menikmati segarnya air di tempat
                                pemandian Air Terjun Putri Kayangan.Fuga ad maiores debitis nemo eaque inventore iure! Deleniti minus nulla aspernatur magni, </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About