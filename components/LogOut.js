import { Pressable, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

const LogOut = () => {
  return (
    <Pressable
      style={{ paddingVertical: 15 }}
      onPress={async () => await signOut(auth)}
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
          로그아웃
        </Text>
      </View>
    </Pressable>
  );
};

export default LogOut;
