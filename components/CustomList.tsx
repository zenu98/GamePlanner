import {
  Text,
  View,
  FlatList,
  SectionList,
  Pressable,
  ActivityIndicator,
  Image,
} from "react-native";

import renderListItem from "./RenderListItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fectchGameListData } from "../util/api";
import { AntDesign } from "@expo/vector-icons";
import GenreList from "./GenreList";
import { useCallback, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { setGameType, setPlatformType } from "../store/types";
function CustomList({ navigation }) {
  const [month, setMonth] = useState("04");
  const monthList = [
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const initialUrl = `/api/games/2024/${month}?page=0&size=10`;
  const gameType = useAppSelector(setGameType);
  const selectedPlatforms = useAppSelector(setPlatformType);
  const nextMonthHandler = useCallback(() => {
    setMonth((prevMonth) => {
      const nextMonthIndex = monthList.indexOf(prevMonth) + 1;
      if (nextMonthIndex < monthList.length) {
        return monthList[nextMonthIndex];
      }
      return prevMonth;
    });
  }, [monthList]);
  const prevMonthHandler = useCallback(() => {
    setMonth((prevMonth) => {
      const prevMonthIndex = monthList.indexOf(prevMonth) - 1;
      if (prevMonthIndex >= 0) {
        return monthList[prevMonthIndex];
      }
      return prevMonth;
    });
  }, [monthList]);

  const { data, fetchNextPage, isFetching, isLoading, isError, error } =
    useInfiniteQuery({
      queryKey: ["gameplanner-data", initialUrl],
      queryFn: ({ pageParam }) => fectchGameListData(pageParam),
      initialPageParam: initialUrl,
      getNextPageParam: (lastPage) => {
        return lastPage.next;
      },
    });
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size={100} />
      </View>
    );
  }
  if (isError) {
    console.log("ERROR", error);
  }

  const filterRealDataByPlatform = (data) => {
    const games = data.pages.map((pageData) =>
      pageData.results.filter((item) => {
        return item.platforms.some((platform) =>
          platform.includes(selectedPlatforms)
        );
      })
    );
    const { count = 0, date = null } = data.pages[0] || {};

    return { games, count, date };
  };
  const filteredDataByPlatform = filterRealDataByPlatform(data);

  const filteredRealData = (data) => {
    if (gameType === "전체") return data.games.flat();
    else {
      const filteredItems = data.games[0].filter((item) => {
        return item.genres.includes(gameType);
      });

      return filteredItems;
    }
  };

  const Sections =
    filteredRealData(filteredDataByPlatform).length > 0
      ? [
          {
            date: filteredDataByPlatform.date,
            data: [{ games: filteredRealData(filteredDataByPlatform) }],
          },
        ]
      : [];

  return (
    <SectionList
      keyExtractor={(index) => index.toString()}
      sections={Sections}
      renderItem={({ item }) => (
        <FlatList
          data={item.games}
          numColumns={2}
          renderItem={({ item }) => renderListItem({ item, navigation })}
          keyExtractor={item.games.id}
        />
      )}
      ListHeaderComponent={() => (
        <View style={{}}>
          <GenreList />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Pressable
              onPress={prevMonthHandler}
              android_ripple={{ color: "#eff2fd" }}
            >
              <AntDesign name="arrowleft" size={24} color="#6183f2" />
            </Pressable>
            <Text
              style={{
                fontSize: 20,
                color: "#263460",
                fontWeight: "500",
                marginHorizontal: 10,
              }}
            >
              2024.{month}
            </Text>
            <Pressable
              onPress={nextMonthHandler}
              android_ripple={{ color: "#eff2fd" }}
            >
              <AntDesign name="arrowright" size={24} color="#6183f2" />
            </Pressable>
          </View>
          {Sections.length === 0 && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 50,
              }}
            >
              <Image
                style={{ width: 150, height: 250 }}
                source={require("../assets/no-data.png")}
                resizeMode="contain"
              />
            </View>
          )}
        </View>
      )}
      onEndReached={() => {
        if (!isFetching) {
          fetchNextPage();
        }
      }}
    />
  );
}
export default CustomList;
