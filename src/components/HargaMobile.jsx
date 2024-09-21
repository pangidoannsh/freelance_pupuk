import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useCallback, useRef, useState } from 'react';

const isPhone = window.innerWidth < 400

const HargaMobile = ({ datas }) => {
    const swiper = useRef(null)
    const [slide, setSlide] = useState({ active: 0, total: 3 })
    const handlePrev = useCallback(() => {
        console.log('test');

        if (!swiper.current) return;
        swiper.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        console.log('test');

        if (!swiper.current) return;
        swiper.current.swiper.slideNext();
    }, []);
    return (
        <div className="relative px-2 w-full">
            <Swiper initialSlide={1} slidesPerView={isPhone ? 1 : 2} spaceBetween={30} ref={swiper} onSlideChange={({ realIndex }) => setSlide(prev => ({ ...prev, active: realIndex }))}>
                {datas.map((harga, i) => (
                    <SwiperSlide key={i} className='p-2 h-full'>
                        <div className={`bg-white shadow-lg border-t-2 border-neutral-100 rounded-2xl py-14 px-10 h-full flex flex-col items-center gap-8 ${harga.best ? 'border-[3px] border-sky-500' : ''}`}>
                            <div className="flex flex-col items-center">
                                <div className="text-xl font-medium text-center my-6">{harga.title}</div>
                                <div className="relative z-10 flex w-[70px] h-[70px] bg-sky-500 rounded-full items-center justify-center highlight">
                                    <Icon icon={harga.icon} className="text-white text-[28px]" />
                                </div>
                                <div className="relative w-max mt-4">
                                    <div className="font-monts absolute top-1 -left-5 -translate-x-1/2 text-sky-500 text-[28px] font-bold">Rp</div>
                                    <div className="font-monts text-sky-500 text-[44px] font-bold">{harga.price}</div>
                                    <div className="absolute bottom-0 -right-4 translate-x-1/2 text-neutral-400 text-lg font-[400]">/Kg</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                {harga.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <Icon icon="ri:check-fill" className="text-green-500 text-xl" />
                                        <div className="text-neutral-500">{benefit}</div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-max py-1.5 px-10 rounded-full border-2 border-neutral-300 text-neutral-500 
                            hover:bg-sky-500 hover:text-white font-medium hover:border-sky-500 duration-300">Order</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className={`prev-btn ${slide.active === 0 ? 'hidden' : ''}`} onClick={handlePrev}>
                <Icon icon="fluent:chevron-left-12-filled" className='text-3xl text-[#194566]' />
            </button>
            <button className={`next-btn ${slide.active === slide.total - 1 ? 'hidden' : ''}`} onClick={handleNext}>
                <Icon icon="fluent:chevron-right-12-filled" className='text-3xl text-[#194566]' />
            </button>
        </div>
    )
}

export default HargaMobile