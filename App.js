import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import GameList from "./screens/GameList";
import GameDetail from "./screens/GameDetail";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameCalendar from "./screens/GameCalendar";
import AuthScreen from "./screens/AuthScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SafeAreaView style={styles.root}>
          <StatusBar />
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="GameList" component={GameList} />
              <Stack.Screen name="GameDetail" component={GameDetail} />
              <Stack.Screen name="GameCalendar" component={GameCalendar} />
              <Stack.Screen name="AuthScreen" component={AuthScreen} />
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
