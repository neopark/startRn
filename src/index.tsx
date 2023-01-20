/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from '../app.json';
import { NavigationContainer } from '@react-navigation/native';
import Contexts from './contexts';
import Providers from './providers';
import { initApis } from './api';
import { initCalendarPicker } from './component/MyCalendarPicker';
import { initFcm } from './lib/fcm';
import {initSnss} from './lib/snss'


function Run(){
    initApis();
    initFcm();
    initSnss();
    initCalendarPicker();
  
    AppRegistry.registerComponent(appName, () => ()=> {
        return(
            <NavigationContainer>
            <Contexts>
              <Providers>
                <App />
              </Providers>
            </Contexts>
          </NavigationContainer>
        )
    });
    
}

Run();
