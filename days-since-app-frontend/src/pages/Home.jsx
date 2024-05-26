import { StyleSheet, Text, View } from "react-native";
import MainContainer from "../components/MainContainer";
import DisplayCard from "../components/DisplayCard";
import HabitList from "../components/HabitList";
import theme from "../theme";

const Home = ({ route, navigation }) => {
  return (
    <MainContainer>
      <View
        style={{ marginTop: 20, display: "flex", gap: theme.componentMargin }}
      >
        <DisplayCard />
        <HabitList />
      </View>
    </MainContainer>
  );
};

export default Home;
