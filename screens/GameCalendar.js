import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-big-calendar";
import Header from "../components/Header";
import dayjs from "dayjs";
import { useCallback, useState } from "react";
import "dayjs/locale/ko";
import NavigationBar from "../components/NavigationBar";
import { useSelector } from "react-redux";

// const eventsss = [
//   {
//     title: "세키로 어쩌구저쩌구 머시기",
//     start: dayjs("2024-02-4").set("hour", 10).set("minute", 0).toDate(),
//     end: dayjs("2024-02-4").set("hour", 10).set("minute", 0).toDate(),
//   },
//   {
//     title: "철권8",
//     start: dayjs("2024-02-8").toDate(),
//     end: dayjs("2024-02-9").toDate(),
//   },
// ];

const CalendarData = () => {
  const gameListData = useSelector((state) => state.gameData.datas);
  const selectedPlatform = useSelector((state) => state.filteredGames.platform);
  const gameData = Object.values(gameListData[selectedPlatform]);

  const data = gameData.map((item) => {
    const list = Object.keys(item.games);

    const gameCalendarData = list.map((key) => {
      return {
        title: item.games[key].title,
        start: dayjs(item.games[key].date)
          .set("hour", 10)
          .set("minute", 0)
          .toDate(),
        end: dayjs(item.games[key].date)
          .set("hour", 10)
          .set("minute", 0)
          .toDate(),
        info: item.games[key],
      };
    });

    return gameCalendarData;
  });
  return data.flat();
};

function GameCalendar({ navigation }) {
  const deviceHeight = Dimensions.get("window").height * 0.76;

  const date = new Date();
  const curMonth = date.getMonth() + 1;
  const curYear = date.getFullYear();
  const [month, setMonth] = useState(curMonth);
  const [year, setYear] = useState(curYear);
  const caledarData = CalendarData();
  console.log("rendering");
  const swipeHandler = useCallback((date) => {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setYear(year);
    setMonth(month);
  }, []);

  const eventHandler = (e) => {
    navigation.navigate("GameDetail", {
      selectedGame: e.info,
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <NavigationBar navigation={navigation} />
      </View>
      <View style={{ flex: 6, backgroundColor: "#fff" }}>
        <View style={styles.calendarDate_container}>
          <Text style={styles.caledarData_year}>{year}</Text>
          <Text style={styles.calendarDate_month}>{month}</Text>
        </View>
        <View style={{ flex: 8 }}>
          <Calendar
            locale="ko"
            events={caledarData}
            height={deviceHeight}
            mode={"month"}
            showAdjacentMonths={false}
            onSwipeEnd={swipeHandler}
            onPressEvent={eventHandler}
          />
        </View>
      </View>
    </View>
  );
}

export default GameCalendar;

const styles = StyleSheet.create({
  calendarDate_container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  calendarDate_month: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caledarData_year: {
    color: "#999",
  },
});
