import { Image, Text, View } from "react-native";

interface ArticleProps {
	title: string;
	author: string;
	imgUrl: string;
	publishedAt: string;
}

const fallbackImgUrl =
	"https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Article = ({ title, author, imgUrl, publishedAt }: ArticleProps) => {
	const formattedDate = new Date(publishedAt).toLocaleDateString("en-GB");
	return (
		<View className="flex flex-row gap-4 mt-8">
			<Image className="flex-1" source={{ uri: imgUrl ?? fallbackImgUrl }} />
			<View className="flex-[3_1_0] gap-4">
				<Text className="text-lg font-bold">{title}</Text>
				<View>
					<Text>{formattedDate}</Text>
					<Text>{author}</Text>
				</View>
			</View>
		</View>
	);
};

export default Article;
