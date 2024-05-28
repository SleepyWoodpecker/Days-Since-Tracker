import { makeAutoObservable, runInAction } from "mobx";
import { addHabitRequest } from "../services";

class HabitListStore {
  habits = [];
  loading = false;
  error = false;

  constructor() {
    makeAutoObservable(this);
  }

  async addHabit({ habitName, goal, reason }) {
    try {
      this.loading = true;
      const response = await addHabitRequest(habitName, goal, reason);

      runInAction(() => {
        this.loading = false;
        return response;
      });
    } catch (e) {
      console.error(e);

      runInAction(() => {
        this.loading = false;
        this.error = true;
      });
    }
  }
}

const habitList = new HabitListStore();
export default habitList;
