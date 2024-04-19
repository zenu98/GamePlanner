import { StyleSheet, View } from "react-native";
import NavigationBar from "../components/NavigationBar";
import CustomList from "../components/CustomList";
import TagModal from "../components/TagModal";
import { GameListScreenProps } from "../data/model";
import { useAppSelector } from "../store/hooks";
import { setModalOption } from "../store/types";
function GameListScreen({ navigation }: GameListScreenProps) {
  const modalOption = useAppSelector(setModalOption);
  return (
    <View style={styles.container}>
      <View style={styles.nav_Container}>
        <NavigationBar navigation={navigation} />
      </View>
      <View style={styles.listContainer}>
        <CustomList navigation={navigation} />
      </View>
      {modalOption && <TagModal />}
    </View>
  );
}

export default GameListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav_Container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },

  listContainer: {
    flex: 6,
    backgroundColor: "white",
  },
});
