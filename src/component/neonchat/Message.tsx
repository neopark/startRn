import { Text } from "@rneui/base";
import {  StyleSheet, View } from "react-native";
import dateFormat from "dateformat";

export type T_formatsDateMask =
  | "ktt hh:MM"
  | "yyyy-mm-dd"
  | "yyyy.mm.dd / HH:MM:ss"
  | "yyyy.mm.dd HH:MM:ss"
  | "yyyy.mm.dd / ktt hh:MM"
  | "yyyy.mm.dd"
  | "mmdd"
  | "yyyy년 m월 dd일 HH시 MM분"
  | "yyyy년 m월";

function date(dateValue: Date | string, mask: T_formatsDateMask) {
  let text = dateFormat(dateValue, mask, undefined, true);
  if (mask.includes("ktt")) {
    text = text.replace("kpm", "오후");
    text = text.replace("kam", "오전");
  }
  return text;
}

const formats = {
  date,
};


function Message(props:any) {
    const item = props.item;
    console.log(item);
    const positon = 'left'
    return(
        <View style={[styles[positon].container]}>
        <View  style={{flexShrink: 1}}>
            <View style={{justifyContent:"flex-end"}} >
                <Text >dfdsfsd</Text>
                <View style={{borderRadius:15,padding:5,backgroundColor:"#ffffff", }}>
                    <Text style={{fontSize:14}}>{item.text}</Text> 
                </View>
            </View>
        </View>
        <View style={{ paddingHorizontal:5, flexShrink: 1,width:150}}>
        <Text style={{fontSize:9}} >
            {dateFormat(Date.now(),'yyyy.mm.dd HH:MM:ss')}
        </Text>
        </View>
        </View>
    )
}

export default Message;


const styles = {
    left: StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection:'row',
        justifyContent: 'flex-start',
        
      },
      wrapper: {
        borderRadius: 10,
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
        flexDirection:'row',
        justifyContent: 'flex-end',
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