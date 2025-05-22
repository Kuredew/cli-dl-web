'use client'

import { SetStateAction, useState } from "react"
import error from "./errorPopup"
import Format from "./utils/formatUtils"
import Reso from "./utils/resoUtils"
import isNoted from "./utils/checkNoted"
import Note from "./notePopup"

let inputValue: string

async function handleForm(formData: FormData, state: (state: SetStateAction<boolean>) => void, error: (state: SetStateAction<boolean>) => void) {
    state(true)

    inputValue = encodeURIComponent(String(formData.get('url')))
    const formatClass = new Format()
    const format = formatClass.getUrlFormat()
    
    let url = `https://cli-dl-api-production.up.railway.app/api?url=${inputValue}`
    
    if (format) {
        let params = `&format=${format}`

        if (format == 'v') {
            const resoClass = new Reso()
            params += `&reso=${resoClass.getReso()}`
        }
        url += params
    }

    console.log(`Bentar, nge fetching data ke api ' ${url} '`)
    try {
        const response = await fetch(url)

        const responseData = await response.json()

        if (responseData) {
            if (responseData.ok == true) {
                window.location.href = responseData.download_url
            }
            else {
                error(true)
            }
        }}
    catch {
        error(true)
    }

    
    state(false)
}

const InputUrl = () => {
    const [isFetching, setFetchingState] = useState(false)
    const [isError, setError] = useState(false)
    const [isNotedState, setNotedState] = useState(false)

    async function formInitalize(formData: FormData) {
        setError(false)
        if (!isNoted()) {
            setNotedState(true)
        }
        handleForm(formData, setFetchingState, setError)
    }
    
    function set() {
        if (isError) {
            return
        }
        setError(true)
    }

    return(
        <form action={formInitalize} key={'whataver'}>
            <div className="mt-9 flex gap-5 h-9 items-center" id="in">
                <div className="flex w-100 max-md:w-[90%] h-full max-w-screen" id="Input-">
                    <input name='url' type='url' className="w-full outline-0 border-0 font-mono max-md:text-sm" placeholder="masukkan url nya disini." autoComplete="off" required/>
                </div>
                
                <button className="flex justify-center items-center h-full aspect-square rounded-full bg-white text-black cursor-pointer" type="submit">
                    {isFetching ? (<svg aria-hidden="true" className="w-4 h-4 text-white animate-spin  fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>
                
            </div>
            {isError && error(setError)}
            {isNotedState && Note(setNotedState)}
        </form>
    )
}

export default InputUrl