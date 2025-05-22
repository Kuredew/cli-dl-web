export default function isNoted() {
    if (typeof window != 'undefined') {
        let isnoted = Boolean(window.localStorage.getItem('Noted'))

        if (isnoted) {
            return isnoted
        } else {
            window.localStorage.setItem('Noted', String(true))
            return false
        }
    }
}