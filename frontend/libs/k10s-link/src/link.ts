import axios, { AxiosRequestConfig } from 'axios';
export class Link {

    baseUrl = 'http://localhost:9001';

    constructor() { }

    fetch(path: String): void {

        axios.get(this.baseUrl + path)
            .then((r) => {
                console.log(r);
                axios.get(this.baseUrl + path).then(r => console.log('second ' + r));
            });

        setTimeout(() =>
            axios.get(this.baseUrl + path).then(r => console.log('timeout ' + r)),
            15000
        )
    }
}