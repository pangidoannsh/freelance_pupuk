
const Testimoni = ({ refrence }) => {
    return (
        <section className='bg-neutral-100 py-20' ref={refrence}>
            <div className="mx-auto lg:w-[1280px] px-4 lg:px-0">
                <div className="lg:w-[40%] mr-auto ">
                    <h2 className="text-3xl font-semibold text-start">Testimoni</h2>
                    <p className="my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, nisi. Aut quae, vero expedita et unde aperiam porro architecto optio voluptas eos cum quos ipsum ullam, harum, fugit doloribus voluptatem!</p>
                    <div className="flex justify-center">
                        <button className='bg-sky-500 hover:bg-sky-700 text-white py-2 pl-6 pr-8 rounded tracking-[2px] mt-4 w-max flex items-center gap-2 group'>
                            Lorem Ipsum
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimoni