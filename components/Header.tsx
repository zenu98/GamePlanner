import { Image, Pressable, StyleSheet, View, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
function Header({ navigation }) {
  const goCalendarHandler = () => {
    navigation.navigate("GameCalendar");
  };
  const goHomeHandler = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={[styles.navContainer_top]}>
      <Pressable onPress={goHomeHandler}>
        <Image
          source={require("../assets/gameplanner_logo_header.png")}
          style={{ width: 60, height: 60 }}
        />
      </Pressable>
      <View style={styles.navContainer_top_contents}>
        <Pressable
          style={{ paddingHorizontal: 20 }}
          onPress={() => Alert.alert("준비중입니다...")}
        >
          <AntDesign size={30} style={[styles.logo]} name="calendar" />
        </Pressable>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Octicons name="person" size={30} style={[styles.logo]} />
        </Pressable>
      </View>
    </View>
  );
}

export default Header;
const styles = StyleSheet.create({
  navContainer_top: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderColor: "#eff2fd",
    borderBottomWidth: 1,
    backgroundColor: "#4d68c1",
  },
  navContainer_top_contents: {
    flexDirection: "row",
  },
  text_Title: {
    color: "white",
  },
  logo: {
    color: "white",
  },
});
