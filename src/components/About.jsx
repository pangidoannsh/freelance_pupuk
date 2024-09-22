import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const About = ({ refrence, onNavigate }) => {
    return (
        <section className='bg-neutral-100 py-20' ref={refrence}>
            <div className="mx-auto lg:w-[1280px] xl:w-[1280px] px-4 lg:px-0 lg:grid lg:grid-cols-5 gap-6 items-center">
                <div className='flex flex-col gap-4 lg:col-span-2'>
                    <h3 className='bg-sky-100 text-sky-500 rounded-lg font-medium py-3 px-4 w-max'>About Us</h3>
                    <h4 className='font-bold text-3xl'>Lorem Ipsum Dolor</h4>
                    <p>Desa yang terletak di Kabupaten Kampar, Riau, dikenal sebagai salah satu sentra budidaya ikan patin di Indonesia. Sebagian besar masyarakatnya menggantungkan hidup dari sektor perikanan ini, yang tidak hanya berkontribusi terhadap ekonomi desa tetapi juga membentuk identitas sosial warga.</p>
                    <button onClick={() => onNavigate("harga")} className='bg-sky-500 hover:bg-sky-700 text-white py-2 pl-6 pr-8 rounded tracking-[2px] mt-4 w-max flex items-center gap-2 group'>
                        Pilih Paket <Icon icon="bi:arrow-right" className='text-white text-xl relative left-0 duration-300 group-hover:left-2' />
                    </button>
                </div>
                <div className='flex md:flex-row flex-col mt-6 lg:mt-0 items-end gap-4 lg:col-span-3'>
                    <div className='bg-cover bg-center bg-no-repeat relative px-10 py-12 rounded-xl w-full group overflow-hidden' style={{ backgroundImage: `url("/assets/images/item1.png")` }}>
                        <div className='absolute inset-0 bg-black/30' />
                        <div className="relative z-10">
                            <div className='w-20 h-20 rounded-full group-hover:bg-sky-500 bg-transparent flex items-center justify-center duration-300'>
                                <Icon icon="oui:copy-clipboard" className='text-sky-500 group-hover:text-white text-3xl' />
                            </div>
                            <h3 className='font-semibold text-2xl mt-6 mb-2 text-white'>Budidaya Ikan Patin</h3>
                            <p className='text-white'>Ikan patin yang dihasilkan tidak hanya dijual dalam bentuk segar, tetapi juga diolah menjadi berbagai produk, seperti ikan salai, abon patin, keripik, naget, dan bakso ikan. Desa ini juga sering</p>
                        </div>
                    </div>
                    <div className='bg-cover bg-center bg-no-repeat relative w-full group px-10 py-12 rounded-xl overflow-hidden' style={{ backgroundImage: `url("/assets/images/item2.jpg")` }}>
                        <div className='absolute inset-0 bg-black/30' />
                        <div className="relative z-10">
                            <div className='w-20 h-20 rounded-full group-hover:bg-sky-500 bg-transparent flex items-center justify-center duration-300'>
                                <Icon icon="f7:building-2" className='text-sky-500 group-hover:text-white text-3xl' />
                            </div>
                            <h3 className='font-semibold text-2xl mt-6 mb-2 text-white'>Pupuk Organik</h3>
                            <p className='text-white'>Limbah ikan patin, yang meliputi jeroan dan sisa-sisa ikan lainnya, memiliki potensi untuk diolah menjadi pupuk organik. Pupuk ini kaya akan unsur hara seperti nitrogen, fosfor, dan kalium yang sangat dibutuhkan untuk pertumbuhan tanaman.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About