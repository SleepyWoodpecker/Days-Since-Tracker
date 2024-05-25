import { SafeAreaView, StyleSheet, View } from "react-native";
import NavigationFooter from "./NavigationFooter";

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 12,
  },
});

const MainContainer = ({ children, currentRoute }) => {
  return (
    <SafeAreaView style={{ height: "100%", wdith: "100%" }}>
      <View style={styles.mainContainer}>{children}</View>
      <NavigationFooter currentRoute={currentRoute} />
    </SafeAreaView>
  );
};

export default MainContainer;
