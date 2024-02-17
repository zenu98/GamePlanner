import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function AuthScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: "50%" }}>
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
          <View style={styles.login_container}>
            <Pressable>
              <Text>로그인</Text>
            </Pressable>
          </View>
        </View>
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
});
