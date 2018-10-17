import axios, { AxiosRequestConfig } from 'axios';
export class Link {

    baseUrl = 'http://localhost:9001';

    constructor() {}

    fetch(path:String): void {
       
        axios.get(this.baseUrl + path)
        .then(r => console.log(r));
    }
}