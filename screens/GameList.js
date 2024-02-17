import { StyleSheet, Text, View } from "react-native";
import NavigationBar from "../components/NavigationBar";
import List from "../components/List";
import TagModal from "../components/TagModal";
import { useSelector } from "react-redux";

function GameList({ navigation }) {
  const modalOption = useSelector((state) => state.filteredGames.tagModal);
  return (
    <View style={styles.container}>
      <View style={styles.nav_Container}>
        <NavigationBar navigation={navigation} />
      </View>
      <View style={styles.listContainer}>
        <List navigation={navigation} />
      </View>
      {modalOption && <TagModal />}
    </View>
  );
}

export default GameList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav_Container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  listContainer: {
    flex: 6,
    backgroundColor: "#fff",
  },
});
