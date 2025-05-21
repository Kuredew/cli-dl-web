import { useState } from "react"

export default function buttonSetting() {
    const [isOpenSetting, setOpenSetting] = useState(false)
    const [index, setIndex] = useState(Number)

    let format
    
    function openClick() {
        setOpenSetting(true)
    }
    
    function closeClick() {
        setOpenSetting(false)
    }

    function setFormat(index: Number) {
        format = String(index)
        window.localStorage.setItem('format', String(index))
    }

    function getFormat() {
        if (typeof window !== 'undefined')  {
            return window.localStorage.getItem('format')
        }
    }

    function set1() {
        setIndex(1)
        setFormat(1)
    }

    function set2() {
        setIndex(2)
        setFormat(2)
    }

    function set3() {
        setIndex(3)
        setFormat(3)
    }

    format = getFormat()

    return (
        <div>
            {isOpenSetting? (<div className="font-mono fixed flex justify-center items-center w-screen h-screen bottom-0 left-0 transition-all duration-300">
                <div className="bg-black border-1 rounded-xl py-4 px-6 text-center" id="window">
                    <h1 className="">pilih format.</h1>
                    <div className="flex gap-2 mt-2 text-sm">
                        <button onClick={set1} className={`cursor-pointer w-25 h-10 border-1 border-white rounded-l-xl ${index == 1 || format == '1' ? 'bg-gray-700' : ''}`}>video</button>
                        <button onClick={set2} className={`cursor-pointer w-25 h-10 border-1 border-white ${index == 2 || format == '2' ? 'bg-gray-700' : ''}`}>audio Only</button>
                        <button onClick={set3} className={`cursor-pointer w-25 h-10 border-1 border-white rounded-r-xl ${index == 3 || format == '3' ? 'bg-gray-700' : ''}`}>AE format</button>
                    </div>
                    <button className="mt-7 py-1 px-2 border-1 border-white bg-green-900 cursor-pointer" onClick={closeClick}>Simpan</button>
                </div>
            </div>) : ''}
            <button className="font-mono mt-9 cursor-pointer bg-none border-0" onClick={openClick} id="Settings">settings</button>

        </div>
    )
}