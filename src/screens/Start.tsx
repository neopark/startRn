import { Button, View } from "react-native";
import { useToast } from "../contexts/toast";
import { initialLoading, useLoading } from "../contexts/loading";
import { useAlert } from "../contexts/alert";
import vaules from "../values";
import MyModal from "../myTemplates/MyModal";
import { useState } from "react";
import values from "../values";
import { GS } from "../styles/sizes";
import MyText from "../component/MyText";
import MyView from "../component/MyView";
import MyTouch from "../component/MyTouch";
import MyImage from "../component/MyImage";
import MyLayout from "../myTemplates/MyLayout";
import { useUser } from "../contexts/user";

function Start(){

    const {setToast} = useToast();
    const {setLoading} = useLoading();
    const {setAlert} = useAlert();
    const[isModalVisible,setIsModalVisible] = useState(false);
    return(
        <>
       
        <Button title="loading" onPress={()=>{
            setLoading('dddd')
            setTimeout(()=>{
                setLoading(initialLoading);
            },1000)

          }} />
        <Button title="Toast" onPress={()=>{
            setToast({msg:"toast",bottom:2000})
            setTimeout(()=>{
                setLoading(initialLoading);
            },1000)

          }} />
        <Button title="Alert" onPress={()=>{
                setAlert({msg:"정말로",buttonList:[
                    {text:"확인",color:vaules.colors.blue}
                ]})
          }} />
        <Button title="아래쪽 모달" onPress={()=>{
              setIsModalVisible(true);
              
          }} />
          <>
          {isModalVisible && (
          <MyModal
            isVisible={isModalVisible}
            setIsVisible={setIsModalVisible}
            isBottom={true}
            style={{
              width: values.device.width,
              backgroundColor: "#ffffff",
              borderTopRightRadius: GS(20),
              borderTopLeftRadius: GS(20),
              paddingHorizontal: GS(82),
            }}
          >
            <MyText
              font="nsb"
              style={{
                fontSize: GS(60),
                color: values.colors.overlay,
                marginTop: GS(82),
              }}
            >
              SNS 계정으로 시작하기
            </MyText>
            <MyView
              style={{
                flexDirection: "row",
                marginBottom: GS(82),
              }}
            >
              <MyTouch
                onPress={() => {
                  setToast({msg:"apple"})
                }}
                style={{
                  marginRight: GS(35),
                }}
              >
                <MyImage name="ico_apple" />
              </MyTouch>
            </MyView>
            <MyTouch
              onPress={() => {
                setIsModalVisible(false);
              }}
              style={{
                position: "absolute",
                top: GS(40),
                right: GS(40),
                padding: GS(20),
              }}
            >
              <MyImage name="closed" />
            </MyTouch>
          </MyModal>
        )}
        </>
      </>
    )
}

export default Start;
    