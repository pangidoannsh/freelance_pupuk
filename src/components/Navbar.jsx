import { Icon } from "@iconify/react/dist/iconify.js"
import { menus } from "../data"
import { useState } from "react"

const isMobile = window.innerWidth < 840

const Navbar = ({ actived, scrollY, onNavigate }) => {
    const [openMenu, setOpenMenu] = useState(false)
    const isScrolling = scrollY > 100
    return (
        <>
            <nav className={`flex items-center justify-between py-5 px-4 lg:px-8 fixed duration-300 w-full z-50 ${isScrolling ? "bg-white shadow" : "bg-white/0"}`}>
                <div className={`text-2xl lg:text-4xl font-semibold ${isScrolling || openMenu ? "text-black" : "text-white"}`}>Logo Here</div>
                <div className="hidden lg:flex items-center gap-4">
                    {menus.map((menu) => (
                        <button onClick={() => onNavigate(menu.id)}
                            className={`${actived === menu.id ? isScrolling ? "text-sky-500" : "text-white" :
                                `text-neutral-300 ${isScrolling ? "hover:text-sky-500" : "hover:text-white"}`} 
                        duration-300 p-4 font-medium`} key={menu.id}>
                            {menu.title}
                        </button>
                    ))}
                </div>
                <button onClick={() => onNavigate("harga")}
                    className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg hidden lg:block">
                    Order Sekarang
                </button>
                <button onClick={() => setOpenMenu(prev => !prev)} className="lg:hidden block">
                    <Icon icon={openMenu ? "ic:round-close" : "ci:hamburger-lg"} className={`text-3xl ${openMenu || isScrolling ? "text-neutral-700" : "text-white"}`} />
                </button>
            </nav>
            {isMobile &&
                <div className={`fixed rounded-b-lg w-screen bg-white z-40 left-0 duration-300 top-0 ${openMenu ? "-translate-y-0" : "-translate-y-full"}
                    flex flex-col pt-16 pb-4`}>
                    {menus.map((menu) => (
                        <button onClick={() => { onNavigate(menu.id); setOpenMenu(false) }} className={`text-start ${actived === menu.id ? "text-sky-500" :
                            `text-neutral-300 hover:text-sky-500`} 
                        duration-300 p-4 font-medium`} key={menu.id}>
                            {menu.title}
                        </button>
                    ))}
                    <button onClick={() => onNavigate("harga")}
                        className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg mx-4">
                        Order Sekarang
                    </button>
                </div>
            }
        </>
    )
}

export default Navbar