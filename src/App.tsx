import { useCallback, useEffect, useState } from "react";
import { initApis } from "./api";
import { initCalendarPicker } from "./component/MyCalendarPicker";
import { useUser } from "./contexts/user";
import fcm from "./lib/fcm";
import Start from "./screens/Start"
import values from "./values";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import permission from "./lib/permission";
import notif from "./lib/notif";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp/Index";
import Home from "./screens/Home/Index";
import { useAppState } from "./contexts/appState";
import storage from "./lib/storage";

const StackNav = createNativeStackNavigator();

function App(){


  const {appState} = useAppState();
  const [routeName,setRouteName] = useState("");


  const setToken = useCallback(async () => {
    const fcmToken = await fcm.getToken();
  

    try {
        console.log(fcmToken)
        console.log(values.device.id);
    } catch (err: any) {
      console.log(err.message);
    }
  }, []);

  //# 포그라운드 메세지 처리
  useEffect(() => {
     const onMsg = fcm.onMsg(notif.show);
// const onMsg = fcm.onMsg((message)=>{
//   console.log("message:",message);
// });
    return () => {
      onMsg.remove();
    };
  }, []);
  
useEffect(()=>{
  console.log("routeName:",routeName);
  if(routeName==""){
    const init =async () => {
        const m = await permission.requestNotif();
//        console.log("noti:",m);
        await setToken();
        const app =   await storage.get("appState");
        console.log("app:",app);
        if(app == null){
        setRouteName("singin")
        }else{
          setRouteName("home") 
        }

    }
    init();
 }
 console.log("statr")
},[routeName])

return (
  <>
    {routeName === "" ? (
      <></>
    ) : (
      <StackNav.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={routeName}
      >
        <StackNav.Screen name="signin" component={SignIn} />
        <StackNav.Screen name="signup" component={SignUp} />
        <StackNav.Screen name="home" component={Home} />
      </StackNav.Navigator>
    )}
  </>
);
}

export default App;
