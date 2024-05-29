import { makeAutoObservable, flow } from "mobx";
import { addHabitRequest } from "../services";

class HabitListStore {
  habits = [];
  loading = false;
  error = false;

  constructor() {
    makeAutoObservable(this, {
      addHabit: flow,
    });
  }

  *addHabit({ habitName, goal, reason, iconName }) {
    try {
      this.loading = true;
      const response = yield addHabitRequest(habitName, goal, reason, iconName);

      this.loading = false;
      return response;
    } catch (e) {
      console.error(e);

      this.error = true;
      this.loading = false;
    }
  }
}

const habitList = new HabitListStore();
export default habitList;
