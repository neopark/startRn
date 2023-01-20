import React, { useEffect } from "react";
import { FlatList, FlatListProps, Image,  StyleSheet,  View } from "react-native";
import { Avatar, Button, Icon, ListItem,Text} from '@rneui/themed';
import Message from "./Message";

export interface NeonChatType extends FlatList {}
export interface T_NeonChatProps extends FlatListProps<any> {
    owner:string;
}

export type T_mtype = "text" | "image" | "file"

export type T_message = {
    text:string
    type?:T_mtype; 
    userId?:string;
    creatDate?:string;
    isSame?:boolean | true;
}


const NeonChat = React.forwardRef<NeonChatType, T_NeonChatProps>((props, ref) => {
    const owner = props.owner;

    useEffect(()=>{
        ref.current.scrollToEnd();
    },[props.data]
    )
    return(
        <FlatList
          {...props}
          ref={ref}
          renderItem={(item)=>{
                return renderItem(item);
          }}
          inverted={false}
        />
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