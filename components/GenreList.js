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
import { filterGenre, setModal } from "../store/types";

const GenreList = () => {
  const gameType = useSelector((state) => state.filteredGames.genre);
  const genreList = useSelector((state) => state.gameData.genres);
  const dispatch = useDispatch();

  const pressHandler = (key, index) => {
    dispatch(filterGenre({ genre: key }));
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
          color="#263460"
          style={{
            transform: [{ scaleX: -1 }],
          }}
        />
      </Pressable>
      <Text style={{ marginRight: 5, color: "#263460" }}>|</Text>
      <ScrollView
        contentContainerStyle={styles.menuContainer_title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {genreList.map((item, index) => (
          <Pressable
            onPress={() => pressHandler(item.genre, index)}
            key={item.id}
            style={[
              styles.type_container,
              gameType === item.genre && styles.type_container_pressed,
            ]}
          >
            <View>
              <Text
                style={
                  gameType === item.genre
                    ? { color: "white" }
                    : { color: "#090d18" }
                }
              >
                {item.genre}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default GenreList;

const deviceWidth = Dimensions.get("window").height;

const styles = StyleSheet.create({
  all_container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fdfdfe",
    alignItems: "center",

    borderBottomWidth: 1,
    borderColor: "#eff2fd",
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
    backgroundColor: "#6183F2",
  },
  tagText: {
    borderRightWidth: 1,
    paddingRight: 10,
    borderColor: "#90a8f5",
  },
});
