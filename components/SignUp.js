import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  TextInput,
  View,
  Pressable,
  Text,
  KeyboardAvoidingView,
} from "react-native";

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: "10%",
        backgroundColor: "#333F66",
      }}
    >
      <View>
        <Text style={{ color: "white", fontSize: 32, fontWeight: "bold" }}>
          게임플래너
        </Text>
      </View>
      <View style={styles.auth_container}>
        <View style={styles.auth_contents_top}>
          <Pressable
            style={styles.auth_contents_top_btn}
            onPress={() => navigation.navigate("SignInScreen")}
          >
            <Text style={{ color: "#878787", fontSize: 16, fontWeight: 500 }}>
              로그인
            </Text>
          </Pressable>
          <Pressable style={styles.auth_contents_top_signup_btn}>
            <Text
              style={{ color: "#6183F2", fontSize: 20, fontWeight: "bold" }}
            >
              회원가입
            </Text>
          </Pressable>
        </View>

        <View style={styles.auth_contents_bottom}>
          <View
            style={{
              height: 400,
              marginBottom: 60,
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            <View style={styles.input_container_contents}>
              <Text style={{ color: "#6183F2", fontWeight: "bold" }}>
                아이디
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1.5,
                  borderColor: "#BDBDBD",
                }}
              >
                <TextInput
                  style={{
                    height: 30,
                    width: "65%",
                    paddingLeft: 5,
                  }}
                />
                <Pressable
                  style={{
                    justifyContent: "center",
                    marginBottom: 5,
                    borderRadius: 7,
                    paddingHorizontal: 5,
                    marginRight: 5,
                    backgroundColor: "#6183F2",
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: 500 }}
                  >
                    중복 확인
                  </Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.input_container_contents}>
              <Text
                style={{
                  color: "#6183F2",
                  fontWeight: "bold",
                }}
              >
                닉네임
              </Text>
              <TextInput style={styles.textInput} />
            </View>
            <View style={styles.input_container_contents}>
              <Text style={{ color: "#6183F2", fontWeight: "bold" }}>
                이메일
              </Text>
              <TextInput style={styles.textInput} />
            </View>

            <View style={styles.input_container_contents}>
              <Text style={{ color: "#6183F2", fontWeight: "bold" }}>
                비밀번호
              </Text>
              <TextInput style={styles.textInput} />
            </View>
            <View style={styles.input_container_contents}>
              <Text style={{ color: "#6183F2", fontWeight: "bold" }}>
                비밀번호 확인
              </Text>
              <TextInput style={styles.textInput} />
            </View>
          </View>
          <View style={styles.login_container}>
            <Text
              style={{
                fontSize: 24,
                color: "#EBECEF",
                fontWeight: "bold",
              }}
            >
              완료
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  auth_container: {
    width: "90%",
    height: 600,
    margin: 30,
    overflow: "hidden",
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  auth_contents_top: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "#E1E1E1",
  },
  auth_contents_top_btn: {
    flex: 0.5,

    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  auth_contents_top_signup_btn: {
    flex: 0.5,
    borderTopLeftRadius: 10,

    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  auth_contents_bottom: {
    justifyContent: "space-between",
  },
  input_container: {
    margin: 15,
    justifyContent: "flex-start",
  },
  input_container_contents: {
    marginHorizontal: 15,
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
    height: 70,
    backgroundColor: "#6183F2",
    alignItems: "center",
    justifyContent: "center",
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
  textInput: {
    height: 30,
    borderBottomWidth: 1.5,
    borderColor: "#BDBDBD",
    paddingHorizontal: 5,
  },
});
