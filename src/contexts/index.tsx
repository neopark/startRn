import React from "react";
import { AlertContext } from "./alert";
import { LoadingContext } from "./loading";
import { ToastContext } from "./toast";
import { UserContext } from "./user";
import {AppStateContext} from "./appState"

export type T_ContextsProps = {
    children: JSX.Element;
  };
  
  function Contexts({ children }: T_ContextsProps) {
    return (
        <UserContext>
            <ToastContext>
              <LoadingContext>
              <AppStateContext>
                <AlertContext>{children}</AlertContext>
                </AppStateContext>
              </LoadingContext>
            </ToastContext>
        </UserContext>
    );
  }
  
  export default Contexts;