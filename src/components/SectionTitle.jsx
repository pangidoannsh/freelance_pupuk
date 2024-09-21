import React from 'react'

const SectionTitle = ({ label, subLabel }) => {
    return (
        <div className="flex flex-col items-center justify-center my-4 md:my-12">
            <div className="relative w-max py-2">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[150%] h-0.5 bg-sky-500 -translate-y-1/2" />
                <h2 className="bg-f9 px-3 text-3xl font-semibold relative z-20">
                    {label}
                </h2>
            </div>
            <div className="text-neutral-500">{subLabel}</div>
        </div>
    )
}

export default SectionTitle