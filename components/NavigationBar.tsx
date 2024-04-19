import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import { filterPlatform, setPlatform } from "../store/types";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { selectPlatform } from "../store/gameData";
import { currentPlatform } from "../store/types";
const { width } = Dimensions.get("window");
function NavigationBar({ navigation }) {
  const platformList = useAppSelector(selectPlatform);
  const selectedPlatform = useAppSelector(currentPlatform);

  const dispatch = useAppDispatch();
  const pressHandler = (key) => {
    let platformType;
    switch (key) {
      case "PC":
        platformType = "PC (Microsoft Windows)";
        break;
      case "XBOX":
        platformType = "Xbox Series X|S";
        break;
      case "PS5":
        platformType = "PlayStation 5";
        break;
      case "Switch":
        platformType = "Nintendo Switch";
        break;
    }
    dispatch(filterPlatform({ platform: key }));
    dispatch(setPlatform({ platformType: platformType }));
  };

  return (
    <View style={styles.navContainer}>
      <Header navigation={navigation} />
      <View style={styles.navContainer_bottom}>
        {platformList.map((item) => {
          return (
            <Pressable
              key={item}
              style={[
                styles.platform_btn,
                selectedPlatform === item && styles.platform_btn_pressed,
              ]}
              onPress={() => pressHandler(item)}
            >
              <Text
                style={[
                  width < 450
                    ? styles.platform_btn_text_phone
                    : styles.platform_btn_text_tablet,
                  selectedPlatform === item && styles.platform_btn_text_pressed,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default NavigationBar;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  navContainer: {
    flex: 2,
  },

  navContainer_bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f7f8fe",
    borderColor: "#eff2fd",

    borderBottomWidth: 1,
  },
  platform_btn: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },
  platform_btn_pressed: {
    borderBottomColor: "#5775d9",
    borderBottomWidth: 1,
  },
  platform_btn_text_phone: {
    color: "#263460",
    fontSize: 16,
  },
  platform_btn_text_tablet: {
    color: "#263460",
    fontSize: 24,
  },
  platform_btn_text_pressed: {
    color: "#5775d9",

    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
  },
});
