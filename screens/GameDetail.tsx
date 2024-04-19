import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import YoutubePlayer from "react-native-youtube-iframe";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import Carousel from "pinar";

import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import HeaderInDetail from "../components/HeaderInDetail";
import { GameDetailScreenProps } from "../data/model";
const { width } = Dimensions.get("window");
const IMG_HEIGHT = 600;

function GameDetail({ route, navigation }: GameDetailScreenProps) {
  const [isOpenVideoList, setIsOpenVideoList] = useState(false);
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ] as any,
    };
  });

  const selectedGame = route.params.selectedGame;

  const detailInfo = [
    { id: 1, key: "RELEASE DATE", value: selectedGame.first_release_date },
    {
      id: 2,
      key: "PLATFORMS",
      value: selectedGame.platforms
        .map((item) => {
          switch (item) {
            case "Nintendo Switch":
              return "Switch";
            case "PC (Microsoft Windows)":
              return "PC";
            case "Xbox Series X|S":
              return "XBOX";
            case "PlayStation 5":
              return "PS5";
            default:
              return null;
          }
        })
        .filter(Boolean)
        .join(", "),
    },
    {
      id: 3,
      key: "GENRE",
      value: selectedGame.genres.map((item) => item).join(", "),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <HeaderInDetail
          customStyle={styles.header_black}
          textStyle={styles.textStyle}
          logoStyle={styles.logoStyle}
          navigation={navigation}
        />
      </View>

      <View style={styles.game_info_container}>
        <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
          <Animated.Image
            source={
              selectedGame.cover !== null
                ? {
                    uri: `https://images.igdb.com/igdb/image/upload/t_1080p/${selectedGame.cover}.jpg`,
                  }
                : {
                    uri: "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
                  }
            }
            style={[styles.image, imageAnimatedStyle]}
          />

          <View style={styles.info_container}>
            <View style={{ padding: 10 }}>
              <Text style={[styles.info_contents_title]}>
                {selectedGame.name}
              </Text>
              <View style={{ padding: 10 }}>
                {detailInfo.map((item) => (
                  <View key={item.id} style={styles.info_contents_list}>
                    <View style={{ flex: 0.4, alignItems: "flex-start" }}>
                      <Text
                        style={
                          width < 450
                            ? styles.info_contents_detail
                            : styles.info_contents_detail_tablet
                        }
                      >
                        {item.key}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 0.6,
                        alignItems: "flex-start",
                      }}
                    >
                      <Text
                        style={
                          width < 450
                            ? styles.info_contents_detail_innerText
                            : styles.info_contents_detail_innerText_tablet
                        }
                      >
                        {item.value}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
              <View style={{ marginBottom: 30 }}>
                {selectedGame.screenshots.length > 0 ? (
                  <Carousel
                    style={
                      width < 450
                        ? styles.phone_carousel
                        : styles.tablet_carousel
                    }
                    showsControls={false}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={[
                      styles.dotStyle,
                      { backgroundColor: "white", opacity: 0.8 },
                    ]}
                  >
                    {selectedGame.screenshots.map((img) => (
                      <Image
                        style={[styles.screenshot]}
                        source={{
                          uri: `https://images.igdb.com/igdb/image/upload/t_screenshot_big/${img}.jpg`,
                        }}
                        key={img}
                      />
                    ))}
                  </Carousel>
                ) : (
                  <View
                    style={[
                      width < 450
                        ? styles.phone_carousel
                        : styles.tablet_carousel,
                      { justifyContent: "center", alignItems: "center" },
                    ]}
                  >
                    <MaterialIcons
                      name="image-not-supported"
                      size={96}
                      color="#BDBDBD"
                    />
                  </View>
                )}
              </View>
              <View
                style={{
                  height: isOpenVideoList
                    ? videoHeight * selectedGame.videos.length + 60
                    : videoHeight + 60,
                }}
              >
                <YoutubePlayer
                  height={videoHeight}
                  videoId={selectedGame.videos[0]}
                  webViewStyle={{ opacity: 0.99 }}
                  key={selectedGame.videos[0]}
                />
                {isOpenVideoList &&
                  selectedGame.videos
                    .slice(1)
                    .map((item) => (
                      <YoutubePlayer
                        height={videoHeight}
                        videoId={item}
                        webViewStyle={{ opacity: 0.99 }}
                        key={item}
                      />
                    ))}
                {selectedGame.videos.length > 1 && (
                  <View style={{ alignItems: "center" }}>
                    <Pressable
                      onPress={() => setIsOpenVideoList(!isOpenVideoList)}
                      style={{ width: 32 }}
                    >
                      <MaterialIcons
                        name={isOpenVideoList ? "expand-less" : "expand-more"}
                        size={32}
                        color="white"
                      />
                    </Pressable>
                  </View>
                )}
              </View>
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    </View>
  );
}

export default GameDetail;
const deviceWidth = Dimensions.get("window").width;
const videoHeight = (deviceWidth / 16) * 9;

const styles = StyleSheet.create({
  dotStyle: {
    width: 12,
    height: 4,
    backgroundColor: "silver",
    marginHorizontal: 3,
    borderRadius: 3,
    opacity: 0.5,
  },
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

  image: {
    width: width,
    height: IMG_HEIGHT,
  },
  screenshot: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  info_container: {
    backgroundColor: "#212121",
  },
  info_contents_title: {
    color: "white",
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    fontFamily: "NanumSquareRoundR",
  },
  info_contents_smallTitle: {
    color: "silver",
    fontSize: 24,
    fontFamily: "NanumSquareRoundR",
  },
  info_contents_detail: {
    color: "#BDBDBD",
    fontSize: 15,
    paddingVertical: 5,

    marginRight: 8,
  },
  info_contents_detail_tablet: {
    color: "#BDBDBD",
    fontSize: 24,
    paddingVertical: 5,

    marginRight: 8,
  },
  info_contents_detail_innerText: {
    color: "white",
    fontSize: 15,
  },
  info_contents_detail_innerText_tablet: {
    color: "white",
    fontSize: 24,
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
  phone_carousel: {
    width: "100%",
    height: 220,
  },
  tablet_carousel: {
    width: "100%",
    height: 450,
  },
});
