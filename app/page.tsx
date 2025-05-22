import InputUrl from "./components/inputUrl"
import ButtonSetting from "./components/buttonSetting"

export default function cliPage() {
    return (
        <div className='flex flex-col items-center justify-center h-dvh w-dvw bg-black font-[family-name:var(--font-google-sans)] p-4'>
            <div id="welcome-quote" className="w-fit">
                <h1 className="text-5xl max-md:text-4xl font-semibold text-center">cli-dl tapi di <span className="font-light">browser</span></h1>
                <a className="text-sm mt-1" href="https://github.com/kuredew/cli-dl-web">Github Repository ↗</a>
            </div>
            <InputUrl />

            <ButtonSetting />
            <div className="fixed bottom-0 w-80 text-center mb-5 opacity-45 text-xs" id="about">web ini adalah implementasi dari module yt-dlp, mampir aja ke github mereka dan kasih support karena udh bikin library yang keren.</div>
        </div>
    )
}