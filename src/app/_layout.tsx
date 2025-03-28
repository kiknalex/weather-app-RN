import { Stack } from "expo-router";
import { store } from "../store/store";
import { Provider } from "react-redux";
import "../../global.css";

const screenOptions = {
	headerStyle: {
		backgroundColor: "#f4511e",
	},
	headerTintColor: "#fff",
	headerTitleStyle: {
		fontWeight: "bold" as "bold",
	},
	headerTitle: "Home",
};

export default function RootLayout() {
	return (
		<Provider store={store}>
			<Stack screenOptions={screenOptions} />
		</Provider>
	);
}
