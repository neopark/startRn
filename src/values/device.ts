import { Dimensions, Platform } from "react-native";
import { getUniqueId, isTablet } from "react-native-device-info";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { getStatusBarHeight } from "react-native-status-bar-height";


let { width, height } = Dimensions.get("window");
if (Platform.OS === "android") {
  height += getStatusBarHeight();
}

const device = {
    id: getUniqueId(),
    isAvd: (Platform.constants as any).Brand === "google",
    isIos: Platform.OS === "ios",
    width,
    height,
    version: Platform.Version,
    isTablet: isTablet(),
    tabHeight: 50,
    headerHeight: 130,
    statusBarHeight: getStatusBarHeight(),
    bottomSpaceHeight: getBottomSpace(),
  };
  
  
  export default device;