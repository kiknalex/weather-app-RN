import { View } from "react-native";
import NewsGeneralList from "../features/news-general-list/news-general-list";

export default function HomeScreen() {
	return (
		<View className="p-4">
			<NewsGeneralList />
		</View>
	);
}
