import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { DrawerScreenProps } from "@react-navigation/drawer";

export interface Genre {
  id: number;
  genre: string;
}
export interface PlatForm {
  platform: string[];
}
export type RootStackParamList = {
  GameList: undefined;
  GameDetail: { selectedGame: SelectedGame };
  SignUpScreen: undefined;
  SignInScreen: undefined;
};

type SelectedGame = {
  cover: string;
  first_release_date: string;
  genres: string[];
  id: number;
  name: string;
  platforms: string[];
  screenshots: string[];
  videos: string[];
};
export type DrawerParamList = {
  Home: undefined;
  GameCalendar: undefined;
  MyGames: undefined;
};
export type GameListScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, "Home">,
  NativeStackScreenProps<RootStackParamList>
>;

export type GameDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "GameDetail"
>;
