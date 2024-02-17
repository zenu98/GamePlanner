import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import Header from "../components/Header";

import YoutubePlayer from "react-native-youtube-iframe";
function GameDetail({ route }) {
  const selectedGame = route.params.selectedGame;
  console.log(selectedGame);
  const detailInfo = [
    { id: 1, key: "RELEASE DATE", value: selectedGame.date },
    {
      id: 2,
      key: "CATEGORY",
      value: selectedGame.category.map((item) => item.text).join(" "),
    },
    { id: 3, key: "DEVELOPER", value: selectedGame.developer },
    { id: 4, key: "PUBLISHER", value: selectedGame.publisher },
  ];

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Header
          customStyle={styles.header_black}
          textStyle={styles.textStyle}
          logoStyle={styles.logoStyle}
        />
      </View>

      <View style={styles.game_info_container}>
        <ScrollView>
          <View style={styles.image_container}>
            <Image
              source={
                selectedGame.image !== ""
                  ? {
                      uri: selectedGame.image,
                    }
                  : null
              }
              style={styles.image}
            />
          </View>
          <View style={styles.info_container}>
            <View style={{ padding: 10 }}>
              <Text style={[styles.info_contents_title]}>
                {selectedGame.title}
              </Text>
              <View style={{ padding: 10 }}>
                {detailInfo.map((item) => (
                  <View key={item.id} style={styles.info_contents_list}>
                    <View style={{ flex: 0.4, alignItems: "flex-start" }}>
                      <Text style={styles.info_contents_detail}>
                        {item.key}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 0.6,
                        alignItems: "flex-start",
                      }}
                    >
                      <Text style={styles.info_contents_detail_innerText}>
                        {item.value}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>

              <View style={{ height: videoHeight }}>
                <YoutubePlayer
                  height={"100%"}
                  videoId={"4OgoTZXPACo"}
                  webViewStyle={{ opacity: 0.99 }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default GameDetail;
const deviceWidth = Dimensions.get("window").width;
const videoHeight = (deviceWidth / 16) * 9;

const styles = StyleSheet.create({
  info_contents_list: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  game_info_container: {
    flex: 13,
    backgroundColor: "#212121",
  },
  image_container: {
    width: "100%",
    height: 450,
  },
  image: {
    height: "100%",
  },
  info_container: {
    backgroundColor: "#212121",
  },
  info_contents_title: {
    color: "white",
    fontSize: 40,
    fontWeight: 700,
    marginBottom: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  info_contents_detail: {
    color: "#BDBDBD",
    fontSize: 15,
    paddingVertical: 5,

    marginRight: 8,
  },
  info_contents_detail_innerText: {
    color: "white",

    fontSize: 15,
  },
  header_black: {
    backgroundColor: "#212121",
    borderColor: "#353535",
  },
  textStyle: {
    color: "white",
  },
  logoStyle: {
    color: "white",
  },
});
