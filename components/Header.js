import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
function Header({ customStyle, textStyle, logoStyle, navigation }) {
  const goCalendarHandler = () => {
    navigation.navigate("GameCalendar");
  };
  const goAuthScreenHandler = () => {
    navigation.navigate("AuthScreen");
  };
  return (
    <View style={[styles.navContainer_top, customStyle]}>
      <Text style={[styles.text_Title, textStyle]}>게임플래너</Text>
      <View style={styles.navContainer_top_contents}>
        <Pressable
          style={{ paddingHorizontal: 20 }}
          onPress={goCalendarHandler}
        >
          <AntDesign
            size={30}
            style={[styles.logo, logoStyle]}
            name="calendar"
          />
        </Pressable>
        <Pressable onPress={goAuthScreenHandler}>
          <Octicons name="person" size={30} style={[styles.logo, logoStyle]} />
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
    paddingHorizontal: 20,
    borderColor: "#E4E4E4",
    borderBottomWidth: 1,
  },
  navContainer_top_contents: {
    flexDirection: "row",
  },
  text_Title: {
    color: "black",
  },
  logo: {
    color: "black",
  },
});
