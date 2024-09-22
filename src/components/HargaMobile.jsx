import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useCallback, useRef, useState } from 'react';

const isPhone = window.innerWidth < 400

const HargaMobile = ({ datas }) => {
    const swiper = useRef(null)
    const [slide, setSlide] = useState({ active: 0, total: 3 })
    const handlePrev = useCallback(() => {
        if (!swiper.current) return;
        swiper.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!swiper.current) return;
        swiper.current.swiper.slideNext();
    }, []);
    return (
        <div className="relative px-2 w-full">
            <Swiper initialSlide={1} slidesPerView={isPhone ? 1 : 2} spaceBetween={30} ref={swiper} onSlideChange={({ realIndex }) => setSlide(prev => ({ ...prev, active: realIndex }))}>
                {datas.map((harga, i) => (
                    <SwiperSlide key={i} className='p-2 h-full'>
                        <div className={`bg-white shadow-lg border-t-2 border-neutral-100 rounded-2xl py-14 px-10 h-[600px] flex flex-col items-center gap-8 
                            ${harga.best ? 'border-[3px] border-sky-500 relative translate-y-0' : ''}`}>
                            <div className="flex flex-col items-center">
                                <div>
                                    <Icon icon={harga.icon} className={`text-[200px] ${harga.best ? 'text-sky-500' : 'text-neutral-300'}`} />
                                </div>
                                <div className="text-4xl font-bold text-neutral-700 font-monts text-center my-6">{harga.title}</div>
                                <div className="text-neutral-500 text-center mt-">{harga.detail}</div>
                                <div className="relative w-max mt-4">
                                    <div className="font-monts absolute top-1 -left-5 -translate-x-1/2 text-sky-500 text-[28px] font-bold">Rp</div>
                                    <div className="font-monts text-sky-500 text-[44px] font-bold">{harga.price}</div>
                                    <div className="absolute bottom-0 -right-4 translate-x-1/2 text-neutral-400 text-lg font-[400]">/Kg</div>
                                </div>
                            </div>
                            <a href="https://wa.link/6gdr2x" target="_blank"
                                className={`mt-auto w-max py-1.5 px-10 rounded-full border-2 ${harga.best ? 'bg-sky-500 text-white border-sky-500 hover:bg-sky-700' :
                                    'border-neutral-300 text-neutral-500 hover:bg-sky-500 hover:text-white font-medium hover:border-sky-500'} duration-300`}>
                                Order
                            </a>
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