import { Text } from "react-native";
import MainContainer from "../components/MainContainer";
import NavigationFooter from "../components/NavigationFooter";

const Home = ({ route, navigation }) => {
  console.log(route);
  return (
    <MainContainer>
      <Text style={{ fontFamily: "PlayfairDisplay_700Bold", fontSize: 40 }}>
        Inter Black
      </Text>
    </MainContainer>
  );
};

export default Home;
