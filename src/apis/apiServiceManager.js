class ApiService {
  _method = "GET";
  _headers = {
    "Content-Type": "application/json",
  };

  getMethod() {
    return this._method;
  }
  setMethod(newMethod) {
    this._method = newMethod;
  }
  getHeaders() {
    return this._headers;
  }
  setHeaders(newHeaders) {
    this._headers = newHeaders;
  }
  getRequest(reBody) {
    if (reBody) {
      return {
        method: this._method,
        headers: this._headers,
        body: JSON.stringify(reBody),
      };
    }
    if (reBody === undefined) {
      return {
        method: this._method,
        headers: this._headers,
        body: null,
      };
    }
  }
}
export default ApiService;
