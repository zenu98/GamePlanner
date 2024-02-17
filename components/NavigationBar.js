import { Pressable, StyleSheet, Text, View } from "react-native";

import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { filterPlatform } from "../store/types";
function NavigationBar({ navigation }) {
  const platformList = useSelector(
    (state) => state.gameData.platforms.platform
  );
  const selectedPlatform = useSelector((state) => state.filteredGames.platform);
  console.log(selectedPlatform);
  const dispatch = useDispatch();
  const pressHandler = (key) => {
    dispatch(filterPlatform({ platform: key }));
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
                  styles.platform_btn_text,
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

const styles = StyleSheet.create({
  navContainer: {
    flex: 2,
  },

  navContainer_bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderColor: "#E4E4E4",

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
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  platform_btn_text: {
    color: "#5D5D5D",
    fontSize: 16,
  },
  platform_btn_text_pressed: {
    color: "#070707",

    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
  },
});
