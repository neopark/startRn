import React, { createContext, useContext, useEffect, useReducer } from "react";
import storage from "../lib/storage";
import { T_user } from "./user";


export type T_appState = {
  user: T_user | null;
  agreement? : boolean | false;
};

export type T_setAppState = (appState: T_appState) => void;

export const initialAppState: T_appState = {
  user: null,
};

const AppState = createContext(initialAppState);

export function useAppState() {
  const Context: any = useContext(AppState);
  const appState: T_appState = Context.appState;
  const setAppState: T_setAppState = Context.setAppState;
  const result = { appState, setAppState };
  return result;
}

export type T_AppStateContextProps = {
  children: JSX.Element;
};

export const AppStateContext = ({ children }: T_AppStateContextProps) => {
  const [appState, setAppState] = useReducer(
    (prevAppState: T_appState, newAppState: T_appState) => {
      return newAppState;
    },
    initialAppState
  );
  const value: any = {
    appState,
    setAppState,
  };

  useEffect(() => {
    const init = async () => {
      const newAppState = await storage.get<T_appState>("appState");
      if (newAppState) {
        setAppState(newAppState);
      }
    };
    init();
  }, []);

  useEffect(() => {
    const setStorage = async () => {
      if (appState === initialAppState) {
        await storage.remove("appState");
      } else {
        await storage.set("appState", appState);
      }
    };
    setStorage();
  }, [appState]);

  return <AppState.Provider value={value}>{children}</AppState.Provider>;
};
