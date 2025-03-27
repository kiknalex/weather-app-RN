import { Text, View } from "react-native";
import { useGetNewsQuery } from "../features/api/api-slice";

export default function HomeScreen() {
	const { data } = useGetNewsQuery();
	console.log(data);
	return (
		<View>
			<Text>Home</Text>
		</View>
	);
}
