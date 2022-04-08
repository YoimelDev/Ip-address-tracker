import React from 'react'

export const AddressInfo = ({ addressInfo }) => {

    const { ip, location, timezone, isp } = addressInfo

    return (
        <div
            className='flex flex-col md:flex-row justify-center items-center md:items-start gap-5 w-80 md:w-[95%] xl:w-[45rem] mx-auto mt-6 py-6 bg-white rounded-2xl transition-all'>
            <div className='text-center md:text-left md:pr-10 md:border-r-2'>
                <p className="text-[#969696] text-xs font-bold font tracking-widest mb-1">
                    IP ADDRESS
                </p>
                <h2 className='text-xl md:text-lg font-medium'>
                    {ip}
                </h2>
            </div>

            <div className='text-center md:text-left md:pr-10 md:border-r-2'>
                <p className="text-[#969696] text-xs font-bold font tracking-widest mb-1">
                    LOCATION
                </p>
                <h2 className='text-xl md:text-lg font-medium md:w-[6.3rem]'>
                    {location.region}, {location.country}
                </h2>
            </div>

            <div className='text-center md:text-left md:pr-10 md:border-r-2'>
                <p className="text-[#969696] text-xs font-bold font tracking-widest mb-1">
                    TIMEZONE
                </p>
                <h2 className='text-xl md:text-lg font-medium'>
                    UTC {timezone}
                </h2>
            </div>

            <div className='text-center md:text-left'>
                <p className="text-[#969696] text-xs font-bold font tracking-widest mb-1">
                    ISP
                </p>
                <h2 className='text-xl md:text-lg font-medium md:w-[6.3rem]'>
                    {isp}
                </h2>
            </div>
        </div>
    )
}
