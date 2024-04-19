import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
function HeaderInDetail({ customStyle, textStyle, logoStyle, navigation }) {
  const goCalendarHandler = () => {
    navigation.navigate("GameCalendar");
  };
  const goHomeHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={[styles.navContainer_top, customStyle]}>
      <Pressable onPress={goHomeHandler}>
        <Image
          source={require("../assets/gameplanner-logo-detail.png")}
          style={{ width: 60, height: 60 }}
        />
      </Pressable>
      <View style={styles.navContainer_top_contents}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="back" size={30} style={[styles.logo, logoStyle]} />
        </Pressable>
      </View>
    </View>
  );
}

export default HeaderInDetail;
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
