import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import { PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display";
import Main from "./src/components/Main";

export default function App() {
  // load all the custom fonts that will be used
  let [fontsLoaded, fontError] = useFonts({
    Raleway_400Regular,
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    console.log("Error loading fonts");
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Raleway_400Regular", fontSize: 40 }}>
        Inter Black
      </Text>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
