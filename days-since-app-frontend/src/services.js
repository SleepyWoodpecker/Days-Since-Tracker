import axios from "axios";
import Constants from "expo-constants";

const url = Constants.expoConfig.extra.backendUrl;

export const addHabitRequest = async (habitName, goal, reason, iconName) => {
  try {
    console.log(`${url}/add-new-habit`);
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
