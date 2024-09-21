import { Icon } from "@iconify/react/dist/iconify.js"
import SectionTitle from "./SectionTitle"
import HargaMobile from "./HargaMobile"

const hargas = [
    {
        title: "Lorem Premium",
        price: "600.000",
        icon: "bi:box",
        benefits: [
            "8 orang/team",
            "ransportasi Perahu Hulu ke Hilir",
            "Air Terjun Arung",
            "Guide",
        ]
    },
    {
        title: "Lorem Gold",
        price: "1.000.000",
        icon: "ph:rocket",
        benefits: [
            "8 orang/team",
            "ransportasi Perahu Hulu ke Hilir",
            "Air Terjun Arung",
            "Guide",
            "Rafting / Arung Jeram Sungai Kopu",
        ],
        best: true
    },
    {
        title: "Lorem Diamond",
        price: "1.500.000",
        icon: "tabler:send",
        benefits: [
            "8 orang/team",
            "ransportasi Perahu Hulu ke Hilir",
            "Air Terjun Arung",
            "Guide",
            "Coffe Break dan Makan Siang",
            "Rafting / Arung Jeram Sungai Kopu",
        ]
    },
]

const isMobile = window.innerWidth < 840

const Harga = ({ refrence }) => {
    return (
        <section className='mx-auto xl:w-[1280px] items-center py-5 lg:mb-32' ref={refrence}>
            <SectionTitle label="Lorem" subLabel="Lorem ipsum dolor sit amet" />
            {
                isMobile ? <HargaMobile datas={hargas} /> : (
                    <div className="flex gap-6 mt-32">
                        {hargas.map((harga, i) => (
                            <div key={i} className="w-full px-2">
                                <div className={`bg-white shadow-lg rounded-2xl py-14 px-10 lg:min-h-[60vh] flex flex-col items-center gap-8 ${harga.best ? 'scale-125 border-[3px] border-sky-500' : ''}`}>
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
                            </div>
                        ))}
                    </div>
                )
            }
        </section>
    )
}

export default Harga