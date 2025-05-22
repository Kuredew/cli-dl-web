export default function Note(setState: Function) {
    return (
        <div>
            <div className="font-mono fixed flex justify-center items-center w-screen h-screen bottom-0 left-0">
                <div className="bg-black border-1 rounded-xl w-100 max-md:w-80 py-4 px-6" id="window">
                    <h1 className="text-2xl max-md:text-xl">Format tidak selalu tersedia.</h1>
                    <p className="max-md:text-xs">Sebagai catatan, video yang didownload mungkin tidak sesuai dengan kualitas yang kamu pilih, eg kamu pilih 720p eh malah dapet 480p, ini dikarenakan video yang ada di link tersebuat tidak mencapai kualitas yang kalian inginkan, namun kami berusaha mendapatkan kualitas yang mendekati dengan pilihan kamu.</p>
                    <button className="mt-7 py-1 px-2 border-1 border-white bg-green-900 cursor-pointer hover:brightness-125 transition-all max-md:text-xs" onClick={() => {setState(false)}}>Wokeh!</button>
                </div>
            </div>
        </div>
    )
}