import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { filterGenre, setModal } from "../store/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

const TagModal = () => {
  const gameType = useSelector((state) => state.filteredGames.genre);

  const [seletedTag, setSelectedTag] = useState(gameType);

  const genreList = useSelector((state) => state.gameData.genres);

  const sortedGenreList = [...genreList].sort(
    (a, b) => a.genre.length - b.genre.length
  );

  const dispatch = useDispatch();
  const modalHandler = () => {
    dispatch(setModal());
  };
  const tagHandler = (tag) => {
    console.log(seletedTag);
    setSelectedTag(tag);
  };
  const searchHandler = () => {
    dispatch(filterGenre({ genre: seletedTag }));
    modalHandler();
  };
  return (
    <View>
      <Modal transparent={true}>
        <View style={styles.modal_background}>
          <View style={styles.modal_inner}>
            <View
              style={{
                flex: 0.15,
                marginHorizontal: 10,

                justifyContent: "center",
              }}
            >
              <Pressable onPress={modalHandler}>
                <MaterialCommunityIcons name="close" size={24} color="gray" />
              </Pressable>
            </View>
            <View></View>
            <ScrollView
              style={styles.modal_inner_tagList_container}
              contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
            >
              {sortedGenreList.map((item) => (
                <Pressable
                  key={item.id}
                  style={[
                    styles.modal_inner_tagList_contents,
                    seletedTag === item.genre &&
                      styles.modal_inner_tagList_contents_pressed,
                  ]}
                  onPress={() => {
                    tagHandler(item.genre);
                  }}
                >
                  <Text
                    style={[
                      styles.modal_inner_tagList_contents_text,
                      seletedTag === item.genre &&
                        styles.modal_inner_tagList_contents_text_pressed,
                    ]}
                  >
                    {item.genre}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
            <View style={styles.modal_inner_button_container}>
              <Pressable
                style={[styles.modal_inner_button]}
                onPress={searchHandler}
              >
                <Text style={styles.modal_inner_button_font}>검색</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  modal_background: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modal_inner: {
    flex: 0.6,
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modal_inner_tagList_container: {
    backgroundColor: "aliceblue",
    flex: 0.7,
    flexWrap: "wrap",
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 10,
  },
  modal_inner_tagList_contents: {
    alignSelf: "flex-start",
    width: "auto",
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#8C8C8C",
  },
  modal_inner_tagList_contents_pressed: {
    backgroundColor: "#6183F2",
    borderColor: "white",
  },
  modal_inner_tagList_contents_text: {
    padding: 5,
    color: "#7A7A7A",
  },
  modal_inner_tagList_contents_text_pressed: {
    color: "white",
  },
  modal_inner_button_container: {
    flex: 0.15,
    paddingVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  modal_inner_button: {
    borderWidth: 1,
    borderColor: "#B9E8FF",
    borderRadius: 20,
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6183F2",
  },

  modal_inner_button_font: {
    color: "white",
    fontSize: 20,
    letterSpacing: 3,
  },
});
export default TagModal;
