import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export default abstract class ApiService {
  protected readonly api: AxiosInstance

  constructor(headers: {} = {}, baseURL: string) {
    this.api = axios.create({
      baseURL,
      headers,
    })

    this.initializeResponseInterceptorApi()
  }

  private initializeResponseInterceptorApi(): void {
    this.api.interceptors.response.use(this.handleResponseApi, this.handleErrorApi)
  }

  private handleResponseApi({ data }: AxiosResponse): AxiosResponse {
    return data
  }

  private handleErrorApi<T>(error: Error | AxiosError<T>): Error | AxiosError<T> {
    throw error
  }
}
