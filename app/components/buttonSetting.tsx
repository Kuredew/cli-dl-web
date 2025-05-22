'use client'

import { useState } from "react"
import Format from './utils/formatUtils'
import resolution from './resolutionSetting'

export default function ButtonSetting() {
    const [isOpenSetting, setOpenSetting] = useState(false)
    const [formatState, setFormat] = useState(Number)
    const [resoState, setReso] = useState(Number)

    let format
    const formatUtils = new Format()
    format = formatUtils.getFormat()
    
    function openClick() {
        if (isOpenSetting == true){
            return 
        }
        setOpenSetting(true)
    }
    
    function closeClick() {
        setOpenSetting(false)
    }

    function set1() {
        setFormat(1)
        formatUtils.setFormat(1)
    }

    function set2() {
        setFormat(2)
        formatUtils.setFormat(2)
    }

    function set3() {
        setFormat(3)
        formatUtils.setFormat(3)
    }

    return (
        <div>
            {isOpenSetting? (<div className="font-mono fixed flex justify-center items-center w-screen h-screen bottom-0 left-0">
                <div className="max-md:w-80 flex flex-col items-center justify-center bg-black border-1 rounded-xl py-4 px-6 text-center transition-all duration-1000" id="window">
                    <h1 className="">pilih format.</h1>
                    <div className="flex gap-2 mt-2 text-sm my-3">
                        <button onClick={set1} className={`max-md:w-20 max-md:h-10 max-md:text-xs cursor-pointer w-25 h-10 border-1 border-white rounded-l-xl hover:brightness-125 transition-all ${formatState == 1 || format == 1 ? 'bg-gray-700' : ''}`}>video</button>
                        <button onClick={set2} className={`max-md:w-20 max-md:h-10 max-md:text-xs cursor-pointer w-25 h-10 border-1 border-white hover:brightness-125 transition-all ${formatState == 2 || format == 2 ? 'bg-gray-700' : ''}`}>audio only</button>
                        <button onClick={set3} className={`max-md:w-20 max-md:h-10 max-md:text-xs cursor-pointer w-25 h-10 border-1 border-white rounded-r-xl hover:brightness-125 transition-all ${formatState == 3 || format == 3 ? 'bg-gray-700' : ''}`}>AE format</button>
                    </div>
                    {formatState == 1 || format == 1 ? resolution(resoState, setReso) : ''}
                    <div className="text-xs w-50">
                        {formatState == 2 || format == 2 ? `download audio dengan kualitas tertinggi.` : ''}
                        {formatState == 3 || format == 3 ? `(MASIH PERENCANAAN)\nTerkadang file yang didownload tidak support untuk aempi maker terutama yang pakai after effect, jadi dev berencana untuk menambahkan fitur convert ke h264 yang support untuk editors!` : ''}
                    </div>
                    <button className="mt-7 py-1 px-2 border-1 border-white bg-green-900 cursor-pointer hover:brightness-125 transition-all" onClick={closeClick}>Simpan</button>
                </div>
            </div>) : ''}
            <button className="font-mono mt-9 cursor-pointer bg-none border-0" onClick={openClick} id="Settings">settings</button>

        </div>
    )
}