import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState();
  const [req, res, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "639578192138-d66e30vj9eig9jte5938o9qnot9aoncc.apps.googleusercontent.com",
  });
  const checkLocalUser = async () => {
    try {
      const userJSON = await AsyncStorage.getItem("@user");
      const userData = userJSON ? JSON.parse(userJSON) : null;
      setUserInfo(userData);
    } catch (e) {
      alert(e.message);
    }
  };
  useEffect(() => {
    if (res?.type == "success") {
      const { id_token } = res.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [res]);
  useEffect(() => {
    checkLocalUser();
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // console.log(JSON.stringify(user, null, 2));
        setUserInfo(user);
        await AsyncStorage.setItem("@user", JSON.stringify(user));
      } else {
        console.log("else");
      }
    });
    return () => unsub();
  }, []);

  return (
    <Pressable
      style={{ paddingVertical: 15 }}
      // onPress={() => navigation.navigate("SignInScreen")}
    >
      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <Ionicons name="exit-outline" size={22} color={"#3D3D3D"} />
        <Text
          style={{
            fontSize: 15,
            color: "#3D3D3D",
            marginLeft: 6,
          }}
        >
          로그인
        </Text>
      </View>
    </Pressable>
  );
};

export default Login;
