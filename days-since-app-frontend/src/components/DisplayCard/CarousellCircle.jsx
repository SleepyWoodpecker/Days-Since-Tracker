import { StyleSheet, View } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  active: {
    backgroundColor: theme.colors.textLight,
  },
  inactive: {
    backgroundColor: theme.colors.inactiveCarousell,
  },
  circle: {
    borderRadius: 10,
    height: 9,
    width: 9,
  },
});

const CarousellCircle = ({ isActive }) => {
  return (
    <View
      style={[styles.circle, isActive ? styles.active : styles.inactive]}
    ></View>
  );
};

export default CarousellCircle;
