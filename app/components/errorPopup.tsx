import { SetStateAction } from "react"

export default function error(setState: (state: SetStateAction<boolean>) => void) {
    return (
        <div>
            <div className="font-mono fixed flex justify-center items-center w-screen h-screen bottom-0 left-0">
                <div className="bg-black border-1 rounded-xl w-100 max-md:w-80 py-4 px-6" id="window">
                    <h1 className="text-2xl max-md:text-xl">Owsyit, kami mendeteksi error</h1>
                    <p className="max-md:text-xs">Biasanya ini berkaitan dengan kondisi internetmu atau link yang kamu masukkan salah/tidak didukung oleh module yt-dlp. Jika kamu merasa semua sudah benar namun masih error, kontak kami lewat github.</p>
                    <button className="mt-7 py-1 px-2 border-1 border-white bg-green-900 cursor-pointer hover:brightness-125 transition-all max-md:text-xs" onClick={() => {setState(false)}}>Wokeh!</button>
                </div>
            </div>
        </div>
    )
}