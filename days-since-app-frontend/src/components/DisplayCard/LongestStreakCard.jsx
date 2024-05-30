import habitList from "../../stores/HabitListStore";
import { useEffect } from "react";
import { flowResult } from "mobx";
import { observer } from "mobx-react-lite";
import Card from "./Card";

const LongestStreakCard = observer(() => {
  const { maxStreak, habitName } = habitList.longestStreakData;

  useEffect(() => {
    (async function getLongestStreak() {
      console.log("fetching data");
      await flowResult(habitList.getLongestStreakForAllHabits());
    })();
  }, [habitList.habits]);

  return <Card habitName={habitName} maxStreak={maxStreak} />;
});

export default LongestStreakCard;
