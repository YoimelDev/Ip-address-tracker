import { useState } from 'react'

export const Form = ({ setCurrentIp }) => {

    const [ip, setIp] = useState('')

    const handelSubmit = (e) => {
        e.preventDefault()

        setCurrentIp(ip)
    }

    return (
        <form
            className="flex justify-center items-center mt-4"
            onSubmit={handelSubmit}
        >
            <div className="relative w-80 md:w-[35rem]">
                <input
                    type="text"
                    className="w-full px-5 py-3 rounded-2xl text-lg outline-0"
                    onChange={e => setIp(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-14 h-[3.25rem] bg-black rounded-r-2xl absolute right-0 cursor-pointer hover:bg-[#2b2b2b] transition-all"
                >
                    <div className="m-auto w-3 h-4 bg-no-repeat bg-[url('src/img/icon-arrow.svg')]"></div>
                </button>
            </div>
        </form>
    )
}
