import { StatusBar } from "expo-status-bar";
import { InboxStack } from "./routes/InboxStack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DraftStack } from "./routes/DraftStack";
import { IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const Drawer = createDrawerNavigator();
  return (
    
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <View onLayout={onLayoutRootView}></View>
      <StatusBar style="auto" />
      <NavigationContainer>
        {/* <InboxStack/> */}
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
          {/* <Drawer.Screen name="Inbox" component={InboxStack} /> //Title is must
          <Drawer.Screen name="Draft" component={DraftStack} /> */}
          <Drawer.Screen name="Inbox" component={InboxStack} 
          options={{
            title:"Inbox",
            drawerIcon:()=>(
              <>
              <Icon name="inbox" size={24}/>
              </>
            )
          }}
          />
          <Drawer.Screen name="Draft" component={DraftStack} 
          options={{
            title:"Draft",
            drawerIcon:()=>(
              <>
              <Icon name="email-open" size={24}/>
              </>
            )
          }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </IconComponentProvider>
    /*
    1]Build you screen
    2]plan your app flow[Routes]
    3] based on flow grout NativeStackNavigator
    4]create Drawer for each flow in App.js
    5]design your custom app bar and embed in flow routes
    6]In app bar for add IconComponentProvider
    */
  );
}
