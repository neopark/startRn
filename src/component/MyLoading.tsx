import React from "react"
import {ActivityIndicator,ActivityIndicatorProps} from "react-native"
import { UIActivityIndicator,BallIndicatorProps } from "react-native-indicators"


export interface MyLoadingType extends ActivityIndicator{}

// export interface T_MyLoadingProps extends ActivityIndicatorProps {}
export interface T_MyLoadingProps extends BallIndicatorProps {}

const MyLoading = React.forwardRef<MyLoadingType,T_MyLoadingProps>((props,ref) =>(
    
  //   <ActivityIndicator
  //       {...props}
  //       ref={ref}
  //       size={props.size || "large"}
  //       color={props.color }
  // />
  <UIActivityIndicator
  {...props}
  color={props.color}
  size = {props.size}
   />

));

export default MyLoading;