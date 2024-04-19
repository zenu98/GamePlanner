import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
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
import SignUp from "../components/SignUp";
WebBrowser.maybeCompleteAuthSession();
function AuthScreen({ navigation }) {
  const [toSignIn, setToSignIn] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [req, res, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "639578192138-d66e30vj9eig9jte5938o9qnot9aoncc.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (res?.type == "success") {
      const { id_token } = res.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
      navigation.goBack();
    }
  }, [res]);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(JSON.stringify(user, null, 2));
        setUserInfo(user);
      } else {
        console.log("else");
      }
    });
    return () => unsub();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          marginTop: "40%",
        }}
      >
        <View style={styles.auth_container}>
          <View style={styles.auth_contents_top}>
            <Pressable style={styles.auth_contentes_top_btn}>
              <Text>로그인</Text>
            </Pressable>
            <Pressable style={styles.auth_contentes_top_btn}>
              <Text>회원가입</Text>
            </Pressable>
          </View>

          <View style={styles.auth_contents_bottom}>
            <View
              style={{
                flex: 0.6,

                justifyContent: "center",
              }}
            >
              <View style={styles.input_container}>
                <TextInput style={styles.input_id} />

                <TextInput style={styles.input_password} />
              </View>
            </View>
            <View style={styles.login_container}></View>
          </View>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Pressable style={styles.google_login} onPress={() => promptAsync()}>
          <AntDesign name="google" size={30} color="white" />
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 17 }}>
            Sign in with Google
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  auth_container: {
    width: "80%",
    height: 250,
    margin: 30,
    overflow: "hidden",
    borderWidth: 0.5,
    borderRadius: 10,
  },
  auth_contents_top: {
    flex: 1,
    flexDirection: "row",
  },
  auth_contentes_top_btn: {
    flex: 0.5,
    borderWidth: 0.5,
  },
  auth_contents_bottom: {
    flex: 5,
    justifyContent: "center",
  },
  input_container: {
    margin: 15,
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
  },
  input_id: {
    height: 40,
    borderBottomWidth: 1,
    padding: 8,
  },
  input_password: {
    height: 40,
    padding: 8,
  },
  login_container: {
    flex: 0.4,
    margin: 15,
    borderWidth: 0.5,
    borderRadius: 7,
  },
  google_login: {
    backgroundColor: "#4285F4",
    borderRadius: 15,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
});
