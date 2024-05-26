import { FlatList, Text, View, Dimensions } from "react-native";
import theme from "../../theme";
import CarousellCircles from "./CarousellCircles";
import LongestStreakCard from "./LongestStreakCard";
import { useState } from "react";

const styles = {
  displayCardContainer: {
    height: 300,
    width: "100%",
    borderRadius: 20,
    paddingVertical: 10,
    backgroundColor: theme.colors.primary,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    shadowOffset: {
      height: 7,
    },

    shadowOpacity: 0.25,
  },
  carousellContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
};

const DisplayCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = (e) => {
    setActiveIndex(
      parseInt(
        e.nativeEvent.contentOffset.x /
          (Dimensions.get("window").width - theme.appMargin * 2)
      )
    );
  };

  const cards = [
    {
      id: "StreakPage",
      el: <LongestStreakCard days={56} habitName={"Habit ABC"} />,
    },
    {
      id: "StreakPageClone",
      el: <LongestStreakCard days={12} habitName={"HIHI"} />,
    },
  ];

  return (
    <View style={styles.displayCardContainer}>
      <View style={styles.carousellContainer}>
        <FlatList
          data={cards}
          renderItem={(card) => card.item.el}
          keyExtractor={(card) => card.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={handleScroll}
        />
      </View>
      <CarousellCircles
        numOfCircles={cards.length}
        currentActivePage={activeIndex}
      />
    </View>
  );
};

export default DisplayCard;
