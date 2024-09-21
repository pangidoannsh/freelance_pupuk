import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';
const images = [
    "/assets/images/jumbotron.jpg",
    "/assets/images/jumbotron2.jpg",
    "/assets/images/jumbotron3.jpg",
]
const Jumbotron = ({ refrence }) => {
    return (
        <section ref={refrence} className="h-screen w-screen relative flex items-center">
            <Swiper modules={[Autoplay]} loop autoplay={{ delay: 3000 }} className="absolute top-0 left-0 w-screen h-screen">
                {images.map((image, i) => (
                    <SwiperSlide key={i} className="relative w-screen h-screen">
                        <div className="absolute inset-0 bg-black/60 z-10" />
                        <div
                            className="relative h-screen w-screen bg-cover bg-center z-[5] bg-no-repeat flex items-center"
                            style={{ backgroundImage: `url("${image}")` }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='relative z-10 px-4 lg:px-0 lg:w-[1280px] mx-auto'>
                <h1 className='text-white text-3xl lg:text-[44px] font-semibold'>Selamat Datang di Lorem Ipsum</h1>
                <p className='text-neutral-300 lg:text-lg my-2 lg:mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati itaque delectus</p>
                <button className="bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 rounded-lg text-lg mt-4">
                    Order Sekarang
                </button>
            </div>
        </section>
    )
}

export default Jumbotron