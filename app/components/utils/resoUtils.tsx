export default class Reso {
    setReso(reso: number) {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('reso', String(reso))
        }
    }

    getReso() {
        if (typeof window !== 'undefined') {
            const reso = Number(window.localStorage.getItem('reso'))

            if (reso) {
                return reso
            } else {
                this.setReso(1080)
                return Number(window.localStorage.getItem('reso'))
            }
        }
        return 0
    }
}