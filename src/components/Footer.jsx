import { menus } from "../data"

const Footer = () => {
    return (
        <section className="bg-neutral-200 pt-12">
            <div className="mx-auto lg:w-[1280px] px-4 lg:px-0">
                <div className="flex md:flex-row flex-col gap-12 md:gap-6">
                    <div className="lg:w-[40%]">
                        <h2 className="text-3xl font-monts font-bold mb-4 md:mb-12">Your Company Name</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eveniet maiores tempore optio magnam quis ipsum aliquid debitis praesentium ipsa placeat culpa animi maxime sunt, aliquam unde nemo tenetur hic!</p>
                    </div>
                    <div className="lg:w-max md:w-full">
                        <div className="font-bold">Useful Links</div>
                        <div className="flex flex-col gap-2 mt-4">
                            {menus.map((menu) => (
                                <div key={menu.id} className="text-sm text-neutral-500 cursor-pointer hover:text-sky-500">{menu.title}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-center mt-6 py-10 px-4">
                    <div className="text-sm">© Copyright <span className="font-bold">Your Company Name</span> Rights Reserved</div>
                </div>
            </div>
        </section>
    )
}

export default Footer