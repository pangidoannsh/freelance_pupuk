import { Icon } from "@iconify/react/dist/iconify.js"
import SectionTitle from "./SectionTitle"
import HargaMobile from "./HargaMobile"

const hargas = [
    {
        title: "Satuan",
        price: "45.000",
        icon: "game-icons:fertilizer-bag",
        detail: "Pembelian dengan harga asli tanpa potongan harga !"
    },
    {
        title: "Paket 5Kg",
        price: "30.000",
        icon: "game-icons:powder-bag",
        detail: "Pembelian dengan potongan harga 25% untuk perkilonya !",
        best: true
    },
    {
        title: "Paket 3Kg",
        price: "40.000",
        icon: "gravity-ui:sack",
        detail: "Pembelian dengan potongan harga 10% untuk perkilonya !"
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
                                <div className={`bg-white shadow-lg rounded-2xl py-14 px-10 lg:min-h-[400px] flex flex-col items-center gap-8 ${harga.best ? 'scale-125 border-[3px] border-sky-500' : ''}`}>
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
                            </div>
                        ))}
                    </div>
                )
            }
        </section>
    )
}

export default Harga