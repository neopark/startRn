import React, { useState } from "react";
import { View } from "react-native";
import MyText from "../../component/MyText";
import MyCheckBox from "../../myTemplates/MyCheckBox";
import vaules from "../../values";


// # 개인정보 동의서
function AgreeMent(){

        const [value,setValue] = useState<boolean>(false);
        const [value1,setValue1] = useState<boolean>(false);
    return(
        <View style={{flex:1,borderWidth:1,alignContent:"center"}}>
        <MyText style={{borderWidth:1,backgroundColor:"#ff0000"}}>개인정보</MyText>
        <MyText style={{flex:2,borderWidth:1,backgroundColor:"#0000ff",alignContent:"flex-end"}}>home</MyText>
        <View style={{flex:1,borderWidth:1,alignItems:"flex-end"}}>
        <View style={{flexDirection:"row",backgroundColor:"#00ff00"}}>
         <MyCheckBox value={value} setValue={setValue}>동의</MyCheckBox>
         <MyCheckBox value={value1} setValue={setValue1}>동의2</MyCheckBox>
        </View>
        </View>
        </View>
        )

}
export default AgreeMent;