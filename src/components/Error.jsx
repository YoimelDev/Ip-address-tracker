import React from 'react'

export const Error = ({ errorMessage }) => {
    return (
        <div className='bg-red-800 w-[30%] mx-auto py-2 flex justify-center text-white font-medium rounded-2xl'>
            {errorMessage}
        </div>
    )
}
