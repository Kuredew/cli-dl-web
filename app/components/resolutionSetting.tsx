import { SetStateAction } from "react";
import Reso from "./utils/resoUtils";

export default function resolution(state: number, setState: (state: SetStateAction<number>) => void) {
    const reso = new Reso()

    const format: number = reso.getReso()

    return (
        <>
        <p className="text-xs w-50">download video dan audio dari kualitas yang kamu inginkan</p>
        <p className="my-3">kualitas</p>
        
        <div className="flex gap-2">
            <button className={`max-md:px-2 max-md:py-1 max-md:text-xs border-1 border-white px-3 py-2 text-sm ${state == 2160 || format == 2160 ? 'bg-gray-700' : ''}`} onClick={() => {setState(2160); reso.setReso(2160);}}>2K</button>
            <button className={`max-md:px-2 max-md:py-1 max-md:text-xs border-1 border-white px-3 py-2 text-sm ${state == 1080 || format == 1080 ? 'bg-gray-700' : ''}`} onClick={() => {setState(1080); reso.setReso(1080);}}>1080p</button>
            <button className={`max-md:px-2 max-md:py-1 max-md:text-xs border-1 border-white px-3 py-2 text-sm ${state == 720 || format == 720 ? 'bg-gray-700' : ''}`} onClick={() => {setState(720); reso.setReso(720);}}>720p</button>
            <button className={`max-md:px-2 max-md:py-1 max-md:text-xs border-1 border-white px-3 py-2 text-sm ${state == 480 || format == 480 ? 'bg-gray-700' : ''}`} onClick={() => {setState(480); reso.setReso(480);}}>480p</button>
            <button className={`max-md:px-2 max-md:py-1 max-md:text-xs border-1 border-white px-3 py-2 text-sm ${state == 360 || format == 360 ? 'bg-gray-700' : ''}`} onClick={() => {setState(360); reso.setReso(360);}}>360p</button>
        </div>
        </>
    )
}