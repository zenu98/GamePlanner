import { View, Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import Login from "./LogIn";
import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import LogOut from "./LogOut";
const CustomDrawer = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <View style={{ flex: 0.5 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: "#6183f2",
          zIndex: 10,
        }}
      >
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 15,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons name="person-circle-outline" size={48} color="white" />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              marginLeft: 5,
            }}
          >
            준비중입니다...
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingVertical: 5 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          paddingHorizontal: 15,
        }}
      >
        {isLogin ? <LogOut /> : <Login navigation={props.navigation} />}

        <View style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <Ionicons name="share-social-outline" size={22} color={"#3D3D3D"} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 6,
                color: "#3D3D3D",
              }}
            >
              Share
            </Text>
          </View>
        </View>

        <View style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <Ionicons
              name="information-circle-outline"
              size={22}
              color={"#3D3D3D"}
            />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 6,
                color: "#3D3D3D",
              }}
            >
              About
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userAvatar: {
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 30,
    flexDirection: "row",
    backgroundColor: "green",

    alignItems: "center",
  },
  switchTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 7,
    paddingVertical: 5,
  },
  preferences: {
    fontSize: 16,
    color: "#ccc",
    paddingTop: 10,
    fontWeight: "500",
    paddingLeft: 20,
  },
  switchText: {
    fontSize: 17,
    color: "",
    paddingTop: 10,
    fontWeight: "bold",
  },
});
