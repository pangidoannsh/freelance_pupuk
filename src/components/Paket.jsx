import { Icon } from "@iconify/react/dist/iconify.js"
import SectionTitle from "./SectionTitle"

const pakets = [
    {
        title: "Pupuk Organik Padat",
        image: "/assets/images/pupuk.jpg",
        desc: "Pupuk organik padat dari limbah ikan patin dihasilkan melalui fermentasi tulang, kulit, dan jeroan. Pupuk ini kaya akan nitrogen, fosfor, dan kalium (N, P, K) yang diperlukan untuk pertumbuhan tanaman, serta dapat memperbaiki struktur dan kesuburan tanah."
    },
    {
        title: "Pupuk Organik Cair",
        image: "/assets/images/pupuk.jpg",
        desc: "Pupuk organik cair (POC) dari limbah ikan patin dihasilkan melalui fermentasi bagian ikan yang tidak terpakai seperti jeroan, kepala, dan tulang. POC ini kaya akan nitrogen (N), fosfor (P), dan kalium (K), yang penting untuk pertumbuhan tanaman, serta mikroorganisme."
    },
]
const Paket = ({ refrence }) => {
    return (
        <section className='mx-auto lg:w-[1280px] items-center py-5 px-4 lg:px-0' ref={refrence}>
            <SectionTitle label="Pupuk" subLabel="Lorem ipsum dolor sit amet" />
            <div className="grid md:grid-cols-2 gap-6 lg:gap-24">
                {pakets.map((paket, i) => (
                    <div key={i} className="rounded-xl overflow-hidden bg-white shadow-md">
                        <div className="h-40 md:h-64 text-white font-bold text-2xl md:text-4xl bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
                            style={{ backgroundImage: `url("${paket.image}")` }}>
                            {paket.title}
                        </div>
                        <div className="p-4">
                            <p className="text-neutral-600 text-justify md:leading-8 text-lg">{paket.desc}</p>
                            <hr className="mt-4" />
                            <button className="w-full bg-sky-500 hover:bg-sky-700 text-white py-3 px-4 rounded-lg text-lg mt-4">Lorem Ipsum</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Paket

// const pakets = [
//     {
//         title: "Paket 1",
//         icon: "ri:group-line",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque delectus"
//     },
//     {
//         title: "Paket 2",
//         icon: "clarity:bundle-line",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque delectus"
//     },
//     {
//         title: "Paket 3",
//         icon: "ph:flag-light",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque delectus"
//     },
//     {
//         title: "Paket 4",
//         icon: "icon-park-outline:telescope",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque delectus"
//     },
//     {
//         title: "Paket 5",
//         icon: "mage:dollar",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati itaque delectus"
//     },
// ]

// {pakets.map((paket, i) => (
//     <div key={i} className="flex gap-6 py-12 items-center relative">
//         <div className="absolute h-0.5 w-[4%] bg-sky-500 left-0 top-0" />
//         <div className="absolute h-0.5 w-[95%] bg-neutral-200 right-0 top-0" />
//         <div className="relative">
//             <div className="bg-sky-500/50 rounded-full w-8 h-8 absolute right-0 bottom-0" />
//             <Icon icon={paket.icon} className="text-neutral-500 text-6xl" />
//         </div>
//         <div className="flex flex-col gap-2 w-full group cursor-pointer">
//             <div className="font-semibold text-lg text-neutral-700 group-hover:text-sky-500">{paket.title}</div>
//             <div className="text-sm text-neutral-500">{paket.description}</div>
//         </div>
//     </div>
// ))}