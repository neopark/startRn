import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import {Button} from "@rneui/base"
import MyText from "../../component/MyText";
import NeonChat, { T_message } from "../../component/neonchat/NeonChat";
import { initialAppState, useAppState } from "../../contexts/appState";
import MyCheckBox from "../../myTemplates/MyCheckBox";
import MySwitch from "../../myTemplates/MySwitch";
import useNav from "../../uses/useNav";


function Index(){
    const [value,setValue] = useState<boolean>(false);
    const [value1,setValue1] = useState<boolean>(false);
    const [value2,setValue2] = useState<boolean>(false);
    const {setAppState} = useAppState();
    const nav = useNav();
    const chat = useRef();
    
    const signOut = ()=>{
        setAppState(initialAppState);
        nav.navigate("signin");
    }
    
    const addMessage1 = (message:T_message) =>{
        console.log("send");
        setData(data.concat(message));
    }

    const [data,setData] = useState<T_message[]>([{text:"aaa"},{text:"bbb"}]);

    const backColor="#FEDC26"
   
    return(
    <View style={{flex:1}}>
    <View style={{borderWidth:1,alignItems:"center"}}>

    <MyText style={{backgroundColor:"#ff0000"}}>home</MyText>
    <Button title="로그아웃" color="secondary" onPress={()=>{
            signOut();
     }} />
         <Button title="add" size="sm" style={{margin:10,padding:10}} type="outline" onPress={()=>{
            const aaa:T_message = {text:"ccccjhjhjkhjkhjkhjkhjkhjkhkjsadfasdfasdfasdfasdfasdasafdadfadfhjkhjkhjkhjhkjhkhjkhkjjh",creatDate:Date.now().toString()};
            setData(data.concat(aaa));
     }} />


    </View>
    <MyText style={{flex:0.1,borderWidth:1,backgroundColor:"#0000ff",alignContent:"flex-end"}}>home</MyText>
    <View style={{flex:1,borderWidth:1,alignItems:"flex-end"}}>
        <View style={{flex:1,flexDirection:"row",backgroundColor:backColor,alignItems:"flex-end"}}>
            <NeonChat data={data} 
                ref={chat}
                owner={"dd"}
                backColor={backColor}
                addMessage = {addMessage1}
            />
        </View>
    </View>
    </View>
    )
}

export default Index;