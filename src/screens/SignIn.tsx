import { useCallback } from "react";
import { Button } from "react-native";
import { T_userSigninData } from "../api/user";
import MyText from "../component/MyText";
import { useAppState } from "../contexts/appState";
import { initialLoading, useLoading } from "../contexts/loading";
import { useToast } from "../contexts/toast";
import { useUser,T_user } from "../contexts/user";
import fcm from "../lib/fcm";
import snss, { T_snsType } from "../lib/snss";
import MyLayout from "../myTemplates/MyLayout";
import useNav from "../uses/useNav";
import values from "../values";

function SignIn()
{

    const nav = useNav();
    const {setToast} = useToast()
    const {setLoading} = useLoading()
    const {setUser} = useUser();
    const {setAppState} = useAppState();
    const signin = useCallback(
        async (snsType: T_snsType) => {
            console.log(snsType)
          setLoading("signin");
          try {
            const fcmToken = await fcm.getToken();
            console.log("fcmTokne:",fcmToken);
            const profile = await snss.signin(snsType);
            console.log(profile);
                if(profile != null){
                    setAppState({user:{
                    id: profile?.id,
                    name: "string",
                    snsType: "string",
                    bizName: "string",
                    phoneNum:"string",
                    bizNum: "string",
                    appleId: "string",
                    googleId: "string",
                    kakaoId: "string",
                    naverId: "string",
                    }
                   }) 
                    nav.navigate("home");
                }            
            } catch (err: any) {
            setToast({
              msg: err.message,
            });
          }
          setLoading(initialLoading);
        },
        []
      );
 
    return(
        <MyLayout>
            <>
            </>
            <MyText>dsfasdfasdfa</MyText>
            <Button
                title="로그인"
                onPress={()=>{
                   signin("google");
                }
                    
                }
            />
       </MyLayout>
    )

}

export default SignIn;

function setLoading(arg0: string) {
    throw new Error("Function not implemented.");
}
