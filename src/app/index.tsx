import { View } from "react-native";
import NewsGeneralList from "../features/news-general-list/news-general-list";
import { Stack } from "expo-router";

export default function HomeScreen() {
	return (
		<View>
			<Stack.Screen name="home" />
			<NewsGeneralList />
		</View>
	);
}
