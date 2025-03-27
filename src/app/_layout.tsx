import { Stack } from "expo-router";
import { store } from "../store/store";
import { Provider } from "react-redux";
import "../../global.css";
export default function RootLayout() {
	return (
		<Provider store={store}>
			<Stack />
		</Provider>
	);
}
