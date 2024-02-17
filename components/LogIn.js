import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const Login = () => {
  return (
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
  );
};

export default Login;

const styles = StyleSheet.create({
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
