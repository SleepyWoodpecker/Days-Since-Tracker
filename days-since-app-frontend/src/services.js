import axios from "axios";
import Constants from "expo-constants";

const url = Constants.expoConfig.extra.backendUrl;

export const addHabitRequest = async (habitName, goal, reason, iconName) => {
  try {
    const response = await axios.post(`http://127.0.0.1:5000/add-new-habit`, {
      habitName,
      goal,
      reason,
      iconName,
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log("error");
    console.error(e);
  }
};

export const getLongestHabitStreakRequest = async () => {
  try {
    response = await axios.get(`${url}/get-longest-streak-for-all`);
    return response.data;
  } catch (e) {
    console.log("error");
    console.error(e);
  }
};
