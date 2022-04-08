import React from 'react'

export const AddressInfo = () => {
    return (
        <div
            className='flex flex-col justify-center items-center gap-5 w-80 mx-auto mt-6 py-6 bg-white rounded-2xl'>
            <div className='text-center'>
                <p className="text-[#969696] text-xs font-bold font tracking-widest mb-1">IP ADDRESS</p>
                <h2 className='text-xl font-medium'>192.212.174.101</h2>
            </div>

            <div className='text-center'>
                <p className="text-[#969696] text-xs font-bold font tracking-widest mb-1">LOCATION</p>
                <h2 className='text-xl font-medium'>Broklyn, NY 10001</h2>
            </div>

            <div className='text-center'>
                <p className="text-[#969696] text-xs font-bold font tracking-widest mb-1">TIMEZONE</p>
                <h2 className='text-xl font-medium'>UTC -05:00</h2>
            </div>

            <div className='text-center'>
                <p className="text-[#969696] text-xs font-bold font tracking-widest mb-1">ISP</p>
                <h2 className='text-xl font-medium'>SpaceX Starlink</h2>
            </div>
        </div>
    )
}
