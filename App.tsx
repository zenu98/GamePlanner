import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import GameDetail from "./screens/GameDetail";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameCalendar from "./screens/GameCalendar";
// import AuthScreen from "./screens/AuthScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./components/CustomDrawer";
import MyGames from "./screens/MyGames";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import GameListScreen from "./screens/GameListScreen";
import { useCallback, useEffect, useState } from "react";
import { Octicons, AntDesign } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { RootStackParamList } from "./data/model";
export const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerStyle: { width: 250 },
      }}
    >
      <Drawer.Screen name="Home" component={GameListScreen} />
      {/* <Drawer.Screen name="GameCalendar" component={GameCalendar} />
      <Drawer.Screen name="My Games" component={MyGames} /> */}
    </Drawer.Navigator>
  );
}
function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function preLoad() {
      try {
        const fontAssets = cacheFonts([
          Octicons.font,
          AntDesign.font,
          { NanumSquareRoundR: require("./assets/font/NanumSquareRoundR.ttf") },
        ]);
        await Promise.all([...fontAssets]);
      } catch (e) {
      } finally {
        setAppIsReady(true);
      }
    }
    preLoad();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SafeAreaView style={styles.root} onLayout={onLayoutRootView}>
          <StatusBar />
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="GameList" component={DrawerNavigator} />
              <Stack.Screen name="GameDetail" component={GameDetail} />
              <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
              <Stack.Screen name="SignInScreen" component={SignInScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
