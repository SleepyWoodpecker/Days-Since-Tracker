import { makeAutoObservable } from "mobx";

class NewHabitFormStore {
  habitName = "";
  goal = "";
  reason = "";

  constructor() {
    makeAutoObservable(this);
  }

  setHabitName(newHabitValue) {
    this.habitName = newHabitValue;
  }

  setGoal(newGoal) {
    this.goal = newGoal;
  }

  setReason(newReason) {
    this.reason = newReason;
  }
}

const habitFormStore = new NewHabitFormStore();

export default habitFormStore;
