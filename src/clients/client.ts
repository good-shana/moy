import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class Client {
    private readonly client: AxiosInstance = Axios.create();

    constructor() {

    }

    get<T extends any>(url: string, options?:AxiosRequestConfig): Promise<T> {
        return this.request({ method: 'get', url, ...options });
    }

    post<T extends any, B extends any>(url: string, data: B, options?: AxiosRequestConfig): Promise<T> {
        return this.request({ method: 'post', url, data, ...options });
    }

    put<T extends any, B extends any>(url: string, data: B, options?: AxiosRequestConfig): Promise<T> {
        return this.request({ method: 'put', url, data, ...options });
    }

    delete<T extends any>(url: string, options?: AxiosRequestConfig): Promise<T> {
        return this.request({ method: 'delete', url, ...options });
    }

    async request(options: AxiosRequestConfig) {
        let response: AxiosResponse;

        try {
            response = await this.client.request(options);
        } catch(e) {
            throw e;
        }

        return response.data;
    }
}