import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

const BASEURL = "https://udyami-user-api/v1";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": undefined,
    "Access-Controll-Allow-Origin": "*",
  },
});

export type DataObject = {
  [key: string]: any;
};

// creating generic api-response type
export interface ApiResponse<T> {
  data: T;
  status: string;
}

// api-error-type
export interface ApiError {
  status: string;
  statusCode: number;
  message: DataObject | string;
}

// api calss with diffrents http methods
export class Api {
  // constructor() {}
  //get mothod
  async get<DataFormat = any>(
    url: string,
    config?: AxiosRequestConfig<ApiResponse<DataFormat>>
  ) {
    return axiosClient
      .get<ApiResponse<DataFormat>>(url, config)
      .then((res) => res.data)
      .catch((e: AxiosError<ApiError>) => {
        throw e.response?.data;
      });
  }
  // post method
  async post<payloadData = any, DataFormat = any>(
    url: string,
    data?: payloadData,
    confg?: AxiosRequestConfig<payloadData>
  ) {
    return axiosClient
      .post<payloadData, AxiosResponse<ApiResponse<DataFormat>>>(
        url,
        data,
        confg
      )
      .then((res) => res.data)
      .catch((error: AxiosError<ApiError>) => {
        throw error.response?.data;
      });
  }
  // puth method
  async put<payloadData = any, DataFormat = any>(
    url: string,
    data?: payloadData,
    config?: AxiosRequestConfig<payloadData>
  ) {
    return axiosClient
      .put<payloadData, AxiosResponse<ApiResponse<DataFormat>>>(
        url,
        data,
        config
      )
      .then((res) => res.data)
      .catch((e: AxiosError<ApiError>) => {
        throw e.response?.data;
      });
  }
  // delete method
  async delete<payloadData = any, DataFormat = any>(
    url: string,
    config?: AxiosRequestConfig<payloadData>
  ) {
    return axiosClient
      .delete<payloadData, AxiosResponse<ApiResponse<DataFormat>>>(url, {
        ...config,
      })
      .then((res) => res.data)
      .catch((e: AxiosError<ApiError>) => {
        throw e.response?.data;
      });
  }
}

const api = new Api();
Object.freeze(api);
export default api;
