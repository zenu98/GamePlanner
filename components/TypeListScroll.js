import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { filterGames, setModal } from "../store/types";
const TypeListScroll = () => {
  const gameType = useSelector((state) => state.filteredGames.type);
  const categoryList = useSelector((state) => state.gameData.category);
  const dispatch = useDispatch();

  const pressHandler = (key) => {
    dispatch(filterGames({ type: key }));
  };
  const modalHandler = () => {
    dispatch(setModal());
  };

  return (
    <View style={styles.all_container}>
      <Pressable
        onPress={modalHandler}
        style={{
          padding: 10,
        }}
      >
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={{
            transform: [{ scaleX: -1 }],
          }}
        />
      </Pressable>
      <Text style={{ marginRight: 5 }}>|</Text>
      <ScrollView
        contentContainerStyle={styles.menuContainer_title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {categoryList.map((item) => (
          <Pressable
            onPress={() => pressHandler(item.genre)}
            key={item.genre}
            style={[
              styles.type_container,
              gameType === item.genre && styles.type_container_pressed,
            ]}
          >
            <View>
              <Text style={gameType === item.genre && { color: "white" }}>
                {item.text}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default TypeListScroll;

const deviceWidth = Dimensions.get("window").height;

const styles = StyleSheet.create({
  all_container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",

    borderBottomWidth: 1,
    borderColor: "#D2D2D2",
  },
  menuContainer_title: {
    height: 50,
    alignItems: "center",
  },
  type_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    height: 30,
    marginRight: 8,
    borderRadius: 4,
  },
  type_container_pressed: {
    backgroundColor: "#212121",
  },
  tagText: {
    borderRightWidth: 1,
    paddingRight: 10,
    borderColor: "#D2D2D2",
  },
});
