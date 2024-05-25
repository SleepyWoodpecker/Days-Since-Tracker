import { SafeAreaView, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 12,
  },
});

const MainContainer = ({ children }) => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>{children}</View>
    </SafeAreaView>
  );
};

export default MainContainer;
