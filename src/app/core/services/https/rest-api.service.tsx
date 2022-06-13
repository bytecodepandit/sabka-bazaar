import axios from "axios";
import { APIDef, APIInput } from "./APIEndPoint";

export class RestAPIService {
  public invoke<T>(
    def: APIDef,
    apiInput: APIInput = {},
    data?: T,
    queryParams?: any,
    additionalHeaders = {},
    handleError = true
  ) {
    return this.invokeAPI(
      def.api(apiInput),
      def.method,
      def.isWhiteListed,
      data,
      queryParams,
      additionalHeaders,
      handleError
    );
  }

  private invokeAPI<T>(
    api: string,
    method: string,
    isWhiteListed?: boolean,
    body?: T,
    queryMap?: any,
    additionalHeaders?: any,
    handleError?: boolean
  ) {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...additionalHeaders,
    };

    const httpOptions = {
      headers,
      params: queryMap,
      observe: "body",
    };

    switch (method) {
      case "POST":
        return this.post<T>(api, body, httpOptions, handleError);
      case "PUT":
        return this.put<T>(api, body, httpOptions, handleError);
      case "PATCH":
        return this.patch<T>(api, body, httpOptions, handleError);
      case "GET":
        return this.get<T>(api, httpOptions, handleError);
      case "DELETE":
        return this.delete<T>(api, httpOptions, handleError);
      default:
        break;
    }
  }

  private post<T>(
    apiUrl: any,
    body: any,
    httpOptions: any,
    handleError?: boolean
  ) {
    return axios({
      method: "post",
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
      data: body,
    }).catch((err) => this.handleError(err, handleError));
  }

  private put<T>(
    apiUrl: any,
    body: any,
    httpOptions: any,
    handleError?: boolean
  ) {
    return axios({
      method: "put",
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
      data: body,
    }).catch((err) => this.handleError(err, handleError));
  }

  private patch<T>(
    apiUrl: any,
    body: any,
    httpOptions: any,
    handleError?: boolean
  ) {
    return axios({
      method: "patch",
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
      data: body,
    }).catch((err) => this.handleError(err, handleError));
  }

  private get<T>(apiUrl: any, httpOptions: any, handleError?: boolean) {
    return axios({
      method: "get",
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
    }).catch((err) => this.handleError(err, handleError));
  }

  private delete<T>(apiUrl: any, httpOptions: any, handleError?: boolean) {
    return axios({
      method: "delete",
      url: apiUrl,
      headers: httpOptions.headers,
      params: httpOptions.params,
    }).catch((err) => this.handleError(err, handleError));
  }

  private handleError<T>(error: any, handleError?: boolean) {
    if (handleError === undefined || handleError) {
    }

    return Promise.reject(
      error.response && error.response.data ? error.response.data : error
    );
  }
}
