import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";
import Root from "./src/navigation/Router";

Text.defaultProps = {
  ...(Text.defaultProps || {}),
  allowFontScaling: false,
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Root />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
