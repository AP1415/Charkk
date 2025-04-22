class Api {
    url = 'http://localhost:3000'

    async getPersonals () {
        const res = await fetch(this.url + '/personal')
        return await res.json()
    }
}

export const api = new Api()