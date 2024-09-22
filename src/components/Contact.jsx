import React from 'react'
import SectionTitle from './SectionTitle'
import { Icon } from '@iconify/react/dist/iconify.js'

const contacts = [
    {
        label: "Address",
        icon: "solar:map-point-outline",
        desc: "Jl. Poros Desa Koto Mesjid Kec. XIII Koto Kampar, Kabupaten Kampar, Riau."
    },
    {
        label: "Call Us",
        icon: "mi:call",
        desc: "(+62) 852 - 7822 - 9701"
    },
    // {
    //     label: "Find Us",
    //     icon: "lets-icons:message",
    //     desc: "lorem ipsum dolor sit amet"
    // },
    // {
    //     label: "Open Hours",
    //     icon: "tabler:clock",
    //     desc: "All Day 07.00 - 20.00 WIB"
    // },
]
const Contact = ({ refrence }) => {
    return (
        <section className='mx-auto lg:w-[1280px] items-center py-5 lg:mb-24 px-4 lg:px-0' ref={refrence}>
            <SectionTitle label="Contact" subLabel="Temukan dan hubungi kami disini:" />
            <div className="grid md:grid-cols-2 gap-2 md:gap-4">
                {contacts.map((contact, i) => (
                    <div key={i} className="bg-neutral-100 p-8 flex flex-col gap-3">
                        <Icon icon={contact.icon} className='text-sky-500 text-[32px]' />
                        <h5 className='font-bold text-xl'>{contact.label}</h5>
                        <p className='text-neutral-500 text-sm'>{contact.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Contact