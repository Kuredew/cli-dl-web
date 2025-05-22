class Format {
    setFormat(index: Number) {
        window.localStorage.setItem('format', String(index))

        return true
    }

    getFormat() {
        if (typeof window !== 'undefined')  {
            let format = Number(window.localStorage.getItem('format'))
            if (format) {
                return format
            } else {
                this.setFormat(1)
                return Number(window.localStorage.getItem('format'))
            }
        }
    }

    getUrlFormat() {
        if (typeof window !== 'undefined')  {
            const format = Number(window.localStorage.getItem('format'))
            if (format == 1) {
                return 'v'
            } if (format == 2){
                return 'a'
            }
        }
    }
}

export default Format