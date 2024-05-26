import CarousellCircle from "./CarousellCircle";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  carousellCircles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 30,
  },
});

const CarousellCircles = ({ numOfCircles, currentActivePage }) => {
  let carousellCircles = [];

  for (let i = 0; i < numOfCircles; i++) {
    carousellCircles.push(
      <CarousellCircle key={i} isActive={i === currentActivePage} />
    );
  }

  return <View style={styles.carousellCircles}>{carousellCircles}</View>;
};

export default CarousellCircles;
