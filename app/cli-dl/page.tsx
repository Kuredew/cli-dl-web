'use client'

import inputUrl from "./components/inputUrl"
import buttonSetting from "./components/buttonSetting"

export default function cliPage() {
    return (
        <div className='flex flex-col items-center justify-center h-dvh w-dvw bg-black font-[family-name:var(--font-google-sans)]'>
            <div id="welcome-quote ">
                <h1 className="text-5xl font-semibold text-center">cli-dl tapi di <span className="font-light">browser</span></h1>
            </div>
            {inputUrl()}

            {buttonSetting()}
            <div className="fixed bottom-0 w-full text-center mb-5 opacity-45 text-xs" id="about">this web is yt-dlp implemented, so supported size are site supported by yt-dlp</div>
        </div>
    )
}