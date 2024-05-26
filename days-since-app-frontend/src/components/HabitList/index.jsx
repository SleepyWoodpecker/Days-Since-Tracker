import { FlatList, View } from "react-native";
import HabitListItem from "./HabitListItem";
import ListMargin from "./ListMargin";
import TitleText from "./TitleText";
import theme from "../../theme";

const HabitList = () => {
  const habits = [
    { habitName: "hi", days: 2000 },
    { habitName: "two thousand and 1", days: 30 },
  ];

  return (
    <View>
      <TitleText text={"Tracked Habits"} />
      <FlatList
        data={habits}
        renderItem={(habit) => (
          <HabitListItem
            habitName={habit.item.habitName}
            days={habit.item.days}
          />
        )}
        keyExtractor={(habit) => habit.habitName}
        ItemSeparatorComponent={<ListMargin marginHeight={15} />}
        ListFooterComponent={<ListMargin marginHeight={theme.footerHeight} />}
      />
    </View>
  );
};

export default HabitList;
