import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  SectionList,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function renderListItem({ item, navigation }) {
  const { title, image } = item;

  const pressHandler = () => {
    navigation.navigate("GameDetail", {
      selectedGame: item,
    });
  };
  return (
    <View style={[styles.gridItem]}>
      <Pressable style={{ flex: 1 }} onPress={pressHandler}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={
              image !== ""
                ? {
                    uri: image,
                  }
                : null
            }
            style={styles.image}
            onError={({ nativeEvent: { error } }) => console.warn(error)}
          >
            <LinearGradient
              colors={["transparent", "black"]}
              style={{
                flex: 0.25,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  margin: 1,
                  fontWeight: 700,
                  fontSize: 18,
                  color: "white",
                }}
              >
                {title}
              </Text>
            </LinearGradient>
          </ImageBackground>
        </View>
      </Pressable>
    </View>
  );
}

export default renderListItem;
const styles = StyleSheet.create({
  gridItem: {
    display: "flex",
    flexDirection: "row",
    flex: 1 / 2,
    maxWidth: "50%",
    padding: 10,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    overflow: "hidden",
    justifyContent: "flex-end",

    borderRadius: 7,
  },
});
