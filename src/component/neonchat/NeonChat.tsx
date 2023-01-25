import React, { useEffect, useState } from "react";
import { FlatList, FlatListProps, Image,  StyleSheet,  View } from "react-native";
import { Avatar, Button, Icon, ListItem,Text} from '@rneui/themed';
import Message from "./Message";
import { TextInput } from "react-native-gesture-handler";
import { T_message } from "../../models";

export interface NeonChatType extends FlatList {}
export interface T_NeonChatProps extends FlatListProps<any> {
    owner:string;
    backColor:string;
    addMessage?: (message:T_message)=>void|null;
}

const Bottom = () =>{
  const [value,setValue] = useState<string>("");
  return(
    <View style={{flexDirection:"row",paddingRight:5}}>
      <TextInput
      value={value}
      onChangeText={(e:string)=>{
          setValue(e);
      }}
      numberOfLines={3}
       style={{flex:1,fontSize:12,margin:5,borderWidth:1,borderRadius:5}}/>
      <Button title="보내기"
       onPress={()=>{
         onSend(value);
       }}
      />
    </View>
  )
}

const onSend = (item:string) =>{
  console.log(item);
}

const NeonChat = React.forwardRef<NeonChatType, T_NeonChatProps>((props, ref) => {
 
  const [value,setValue] = useState<string>("");
  
  const owner = props.owner;
  
    console.log("chatCom")
    console.log(props)
  //  const addMessage = props.addMessage;
    useEffect(()=>{
        ref.current.scrollToEnd();
    },[props.data]
    )
    return(
       <View style={{flex:1,flexDirection:'column'}}>
        <FlatList
          {...props}
          ref={ref}
          style={{backgroundColor:props.backColor,marginVertical:5}}
          renderItem={(item)=>{
                return renderItem(item);
          }}
          inverted={false}
          
        />
      <View style={{flexDirection:"row",paddingRight:5,alignItems:'center'}}>
      <Icon name="pluscircleo" type="antdesign" size={30} ></Icon>
      <TextInput
      value={value}
      onChangeText={(e:string)=>{
          setValue(e);
      }}
      multiline={true}
      numberOfLines={1}
       style={{flex:1,margin:5,borderWidth:1,borderRadius:5,backgroundColor:'#ffffff',color:'#000000'}}/>
      <Button title="보내기"
       onPress={()=>{
         const message1 :T_message = {text:value,isSame:false,displayName:"윤댕"}
         console.log("send1")
         props.addMessage && props.addMessage(message1)
         setValue("");
       }}
      />
    </View>
        </View>
    )
});

const renderItem = ({item,owner}:any) =>{


    return(
        <View style={{flexDirection:'row',margin:5,justifyContent:'flex-start',alignItems:'flex-start'}}>
          { !item.isSame &&
          <View >
          <Avatar
          size={33}
          rounded
          icon={{ name: 'rowing' }}
          containerStyle={{backgroundColor: '#00a7f7',marginRight:5}}
          />
          </View>
          }
          <Message item={item} />
         </View>
    )
};

const styles = {
    left: StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'flex-start',
      },
      wrapper: {
        borderRadius: 15,
//        borderWidth:1,
//        marginRight: 60,
        padding:5,
        minHeight: 20,
        justifyContent: 'flex-end',
        backgroundColor:"#ffffff"
      },
      containerToNext: {
        borderBottomLeftRadius: 3,
      },
      containerToPrevious: {
        borderTopLeftRadius: 3,
      },
      bottom: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
    }),
    right: StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'flex-end',
      },
      wrapper: {
        borderRadius: 15,
//        backgroundColor: Color.defaultBlue,
        marginLeft: 60,
        minHeight: 20,
        justifyContent: 'flex-end',
      },
      containerToNext: {
        borderBottomRightRadius: 3,
      },
      containerToPrevious: {
        borderTopRightRadius: 3,
      },
      bottom: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
    }),
    content: StyleSheet.create({
      tick: {
        fontSize: 10,
//        backgroundColor: Color.backgroundTransparent,
  //      color: Color.white,
      },
      tickView: {
        flexDirection: 'row',
        marginRight: 10,
      },
      username: {
        top: -3,
        left: 0,
        fontSize: 12,
        backgroundColor: 'transparent',
        color: '#aaa',
      },
      usernameView: {
        flexDirection: 'row',
        marginHorizontal: 10,
      },
    }),
  }

export default NeonChat;