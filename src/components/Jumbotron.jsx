import React from 'react'

const Jumbotron = () => {
    return (
        <section
            className="h-screen w-screen bg-cover bg-center bg-no-repeat relative flex items-center"
            style={{ backgroundImage: `url("/assets/images/jumbotron.jpg")` }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className='relative z-10 lg:w-[1280px] mx-auto'>
                <h1 className='text-white text-[44px] font-semibold'>Selamat Datang di Lorem Ipsum</h1>
                <p className='text-neutral-300 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati itaque delectus</p>
                <button className="bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 rounded-lg text-lg mt-4">
                    Order Sekarang
                </button>
            </div>
        </section>
    )
}

export default Jumbotron