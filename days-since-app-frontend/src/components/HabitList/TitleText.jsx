import { Text, StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  titleText: {
    fontFamily: theme.font.headerText,
    fontSize: theme.fontSize.h1,
    textAlign: "center",
    marginBottom: 10,
  },
});

const TitleText = ({ text }) => {
  return <Text style={styles.titleText}>{text}</Text>;
};

export default TitleText;
