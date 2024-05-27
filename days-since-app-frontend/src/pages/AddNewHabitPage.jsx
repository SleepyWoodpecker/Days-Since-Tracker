import { Text, View } from "react-native";
import MainContainer from "../components/MainContainer";
import NewHabitForm from "../components/NewHabitForm";

const AddNewHabitPage = () => {
  return (
    <MainContainer>
      <View style={{ marginTop: 20, display: "flex", alignItems: "center" }}>
        <NewHabitForm />
      </View>
    </MainContainer>
  );
};

export default AddNewHabitPage;
