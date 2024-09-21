import { Icon } from "@iconify/react/dist/iconify.js"
import SectionTitle from "./SectionTitle"

const pakets = [
    {
        title: "Paket 1",
        icon: "ri:group-line",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque delectus"
    },
    {
        title: "Paket 2",
        icon: "clarity:bundle-line",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque delectus"
    },
    {
        title: "Paket 3",
        icon: "ph:flag-light",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque delectus"
    },
    {
        title: "Paket 4",
        icon: "icon-park-outline:telescope",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque delectus"
    },
    {
        title: "Paket 5",
        icon: "mage:dollar",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque delectus"
    },
]
const Paket = () => {
    return (
        <section className='mx-auto lg:w-[1280px] items-center py-5'>
            <SectionTitle label="Paket" subLabel="Lorem ipsum dolor sit amet" />
            <div className="grid grid-cols-2 gap-6">
                {pakets.map((paket, i) => (
                    <div key={i} className="flex gap-6 py-12 items-center relative">
                        <div className="absolute h-0.5 w-[4%] bg-sky-500 left-0 top-0" />
                        <div className="absolute h-0.5 w-[95%] bg-neutral-200 right-0 top-0" />
                        <div className="relative">
                            <div className="bg-sky-500/50 rounded-full w-8 h-8 absolute right-0 bottom-0" />
                            <Icon icon={paket.icon} className="text-neutral-500 text-6xl" />
                        </div>
                        <div className="flex flex-col gap-2 w-full group cursor-pointer">
                            <div className="font-semibold text-lg text-neutral-700 group-hover:text-sky-500">{paket.title}</div>
                            <div className="text-sm text-neutral-500">{paket.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Paket