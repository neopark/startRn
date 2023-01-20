import React from "react";
import { initialLoading, useLoading } from "../contexts/loading";
import MyLoading from "../component/MyLoading";
import MyView from "../component/MyView";
import { GS } from "../styles/sizes";
import values from "../values";
import colors from "../values/colors";

export type T_LoadingProviderProps = {
  children: JSX.Element;
};

function LoadingProvider({ children }: T_LoadingProviderProps) {
  const { loading } = useLoading();

  return (
    <>
      {children}
      <MyView
        pointerEvents="none"
        style={{
          top: GS(0),
          left: GS(0),
          width: values.device.width,
          height: values.device.height,
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading !== initialLoading && <MyLoading size={80} color="#ff00cc" />}
      </MyView>
    </>
  );
}

export default LoadingProvider;

