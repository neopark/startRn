import NaverLogin from '@react-native-seoul/naver-login';
import type {
    GetProfileResponse,
    NaverLoginResponse,
  } from '@react-native-seoul/naver-login';

import values from "../../values";
import React,{useState} from "react";
import { UserContext } from '../../contexts/user';


const consumerKey =values.naver.consumerKey;
const consumerSecret =values.naver.consumerSecret
const appName = values.app.name;
const serviceUrlScheme = values.naver.urlScheme;

async function signin() {

    try{

        const result:NaverLoginResponse = await new Promise((resolve,err) => {


            const aa =  NaverLogin.login({
                appName,
                consumerKey,
                consumerSecret,
                serviceUrlScheme,
              }); 
                resolve(aa);  
        });

        if(result.isSuccess){
            const profile = await new Promise((resolve,err) =>{
                const bb =  NaverLogin.getProfile(result.successResponse.accessToken);
                    resolve(bb);
            }) 
             //   console.log("profile:",profile)

            return profile.response;
        }else{

            return false;            
        }
    
    }catch(err:any){
        if (String(err) !== "errCode: user_cancel, errDesc: user_cancel") {
            throw err;
        }
    }

   
}

async function signout() {
  await NaverLogin.logout();
}

const naver = {
  signin,
  signout,
};

export default naver;

