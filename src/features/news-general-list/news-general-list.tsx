import { Text, View, FlatList, ActivityIndicator } from "react-native";
import { useGetTopNewsQuery } from "../api/api-slice";

const NewsGeneralList = () => {
	const { data, isLoading } = useGetTopNewsQuery();
	if (isLoading) {
		return <ActivityIndicator size="large" />;
	}
	return (
		<View>
			<FlatList
				data={data.articles}
				renderItem={({ item }) => (
					<View>
						<Text>{item.title}</Text>
					</View>
				)}
				keyExtractor={(item) => item.url}
			/>
		</View>
	);
};

export default NewsGeneralList;
