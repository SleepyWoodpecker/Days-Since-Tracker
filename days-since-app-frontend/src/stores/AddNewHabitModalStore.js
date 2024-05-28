import { makeAutoObservable } from "mobx";

class NewHabitModal {
  isOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}

const habitModalState = new NewHabitModal();
export default habitModalState;
