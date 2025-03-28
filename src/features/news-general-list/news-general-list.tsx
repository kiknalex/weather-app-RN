import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { useGetTopNewsQuery } from "../api/api-slice";
import Article from "../../components/article/article";

const NewsGeneralList = () => {
	const { data, isLoading } = useGetTopNewsQuery();
	if (isLoading) {
		return (
			<ActivityIndicator
				className="h-screen flex justify-center items-center"
				size="large"
			/>
		);
	}
	console.log(data);
	return (
		<View>
			<FlatList
				data={data.articles}
				renderItem={({ item }) => (
					<Article
						title={item.title}
						author={item.author}
						publishedAt={item.publishedAt}
						imgUrl={item.urlToImage}
					/>
				)}
				keyExtractor={(item) => item.url}
			/>
		</View>
	);
};

export default NewsGeneralList;
