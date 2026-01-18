
class Api {
    url = 'https://charkk-server.onrender.com'

    async getPersonals () {
        const res = await fetch(this.url + '/personal')
        return await res.json()
    }
}

export const api = new Api()