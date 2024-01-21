import axios from "axios";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = "https://rep.royantech.com/v1/api/";
export const getData = axios.create({
  method: "GET",
});
export const postData = axios.create({
  method: "POST",
});
export const removeData = axios.create({
  method: "DELETE",
});
export const editAxios = axios.create({
  method: "PUT",
});

export const fetcherGet = (url: string) => getData(url).then((res) => res.data);
