import React from 'react'

export const Form = () => {
    return (
        <form className="flex justify-center items-center mt-4">
            <div className="relative w-80">
                <input
                    type="text"
                    className="w-full px-5 py-3 rounded-xl text-lg outline-0"
                />
                <button
                    type="submit"
                    className="w-14 h-[3.25rem] bg-black rounded-r-lg absolute right-0 cursor-pointer hover:bg-[#2b2b2b] transition-all"
                >
                    <div className="m-auto w-3 h-4 bg-no-repeat bg-[url('src/img/icon-arrow.svg')]"></div>
                </button>
            </div>
        </form>
    )
}
