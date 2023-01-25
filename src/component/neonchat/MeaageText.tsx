import React from "react"
import { Linking, StyleSheet,View } from "react-native"
import ParsedText from "react-native-parsed-text"


const WWW_URL_PATTERN = /^www\./i
const DEFAULT_OPTION_TITLES = ['Call', 'Text', 'Cancel']

const MessageText = (props:any) => {
    
    function handleUrlPress(url:any, matchIndex:any /*: number*/){
        Linking.openURL(url);
      }
    
     function handlePhonePress(phone:any, matchIndex:any /*: number*/) {
        // AlertIOS.alert(`${phone} has been pressed!`);
      }
    
      function handleNamePress(name:any, matchIndex:any /*: number*/) {
        // AlertIOS.alert(`Hello ${name}`);
      }
    
      function handleEmailPress(email:any, matchIndex:any /*: number*/) {
        // AlertIOS.alert(`send email to ${email}`);
      }
    
      function renderText(matchingString:any, matches:any) {
        // matches => ["[@michel:5455345]", "@michel", "5455345"]
        let pattern = /\[(@[^:]+):([^\]]+)\]/i;
        let match = matchingString.match(pattern);
        return `^^${match[1]}^^`;
      }


    return(
        <View style={styles.container}>
        <ParsedText
            parse={[
                { type: 'url', style: styles.url, onPress: handleUrlPress },
                {
                  type: 'phone',
                  style: styles.phone,
                  onPress: handlePhonePress,
                },
                {
                  type: 'email',
                  style: styles.email,
                  onPress: handleEmailPress,
                },
                {
                  pattern: /Bob|David/,
                  style: styles.name,
                  onPress: handleNamePress,
                },
                {
                  pattern: /\[(@[^:]+):([^\]]+)\]/i,
                  style: styles.username,
                  onPress: handleNamePress,
                  renderText: renderText,
                },
                { pattern: /42/, style: styles.magicNumber },
                { pattern: /#(\w+)/, style: styles.hashTag },
              ]}
        >
           Hello this is an example of the ParsedText, links like
          http://www.google.com or http://www.facebook.com are clickable and
          phone number 444-555-6666 can call too. But you can also do more with
          this package, for example Bob will change style and David too. You
          should mention [@michel:5455345] about that. foo@gmail.com And the
          magic number is 42! #react #react-native
        </ParsedText>
        </View>
    )

}

export default MessageText;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  
    url: {
      color: 'red',
      textDecorationLine: 'underline',
    },
  
    email: {
      textDecorationLine: 'underline',
    },
  
    text: {
      color: 'black',
      fontSize: 15,
    },
  
    phone: {
      color: 'blue',
      textDecorationLine: 'underline',
    },
  
    name: {
      color: 'red',
    },
  
    username: {
      color: 'green',
      fontWeight: 'bold'
    },
  
    magicNumber: {
      fontSize: 42,
      color: 'pink',
    },
  
    hashTag: {
      fontStyle: 'italic',
    },
  
  });