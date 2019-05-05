
export default class RestAPI {
    constructor(fetch) {
        this.fetch = fetch;
    }
    checkPath(url) {
        if (!url) {
            throw new Error("is not a valid url");
        }
    }
    get(url) {
        this.checkPath(url);
        return this.fetch(`${url}`, {
            method: "GET",
            mode: 'cors',
            cache: 'default'
        }).then(data => {
            return data.json();
        });
    }
}