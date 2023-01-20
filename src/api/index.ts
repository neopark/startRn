import React from "react";
import axios from "axios";
import values from "../values";
import storage from "../lib/storage";


export function initApis(){

    axios.defaults.baseURL = values.server.url;
    axios.defaults.withCredentials = true;
//    console.log(axios.defaults.baseURL);
}

export type T_sendApiConfig = {
    method: "get" | "put" | "post" | "delete";
    url: string;
    data?: any;
    isForm?: boolean;
  };
  
  export type T_sendApiResponseData = {
    isSuccess: boolean;
    msg: string;
    data?: any;
  };

  export async function sendApi(config: T_sendApiConfig) {
    let response: any = null;
    if (config.isForm) {
      response = await fetch(`${values.server.url}${config.url}`, {
        method: config.method.toUpperCase(),
        body: config.data,
      });
      response = await response.json();
      response = {
        data: response,
      };
    } else {
      response = await axios(config);
    }
    const data = response.data;
    data.isSuccess = data?.code === "1";
    data.msg = data?.message || "";
    delete data.code;
    delete data.message;
    const newData: T_sendApiResponseData = data;
    const newResponse = {
      ...response,
      data: newData,
    };
    return newResponse;
  }

  
export async function setAccessToken(accessToken: string) {
    await storage.set("accessToken", {
      accessToken,
    });
  }
  
  export async function removeAccessToken() {
    await storage.remove("accessToken");
  }
  
  export async function getAccessToken() {
    const data = await storage.get("accessToken");
    if (data) {
      return data.accessToken;
    } else {
      return null;
    }
  }
  
  const apis = {
  };
  
  export default apis;