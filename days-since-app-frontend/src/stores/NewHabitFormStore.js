import { makeAutoObservable } from "mobx";

class NewHabitFormStore {
  habitName = "";
  goal = "";
  reason = "";
  iconName = null;

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

  setIconName(iconName) {
    this.iconName = iconName;
  }

  clearHabitForm() {
    this.setHabitName("");
    this.setIconName(null);
    this.setGoal("");
    this.setReason("");
  }

  get currentIcon() {
    return this.iconName;
  }

  get formValues() {
    return {
      habitName: this.habitName,
      goal: this.goal,
      reason: this.reason,
      iconName: this.iconName,
    };
  }
}

const habitFormStore = new NewHabitFormStore();

export default habitFormStore;
