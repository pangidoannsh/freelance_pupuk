import { menus } from "../data"
const Navbar = ({ actived, scrollY }) => {
    const isScrolling = scrollY > 100
    return (
        <nav className={`flex items-center justify-between py-5 px-4 md:px-8 fixed duration-300 w-full z-50 ${isScrolling ? "bg-white shadow" : "bg-white/0"}`}>
            <div className={`text-2xl lg:text-4xl font-semibold ${isScrolling ? "text-black" : "text-white"}`}>Logo Here</div>
            <div className="flex items-center gap-4">
                {menus.map((menu) => (
                    <button className={`${actived === menu.id ? isScrolling ? "text-sky-500" : "text-white" :
                        `text-neutral-300 ${isScrolling ? "hover:text-sky-500" : "hover:text-white"}`} 
                        duration-300 p-4 font-medium`} key={menu.id}>
                        {menu.title}
                    </button>
                ))}
            </div>
            <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg">
                Order Sekarang
            </button>
        </nav>
    )
}

export default Navbar