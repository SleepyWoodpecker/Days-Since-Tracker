import { Text, View } from "react-native";
import MainContainer from "../components/MainContainer";
import DisplayCard from "../components/DisplayCard";

const Home = ({ route, navigation }) => {
  console.log(route);
  return (
    <MainContainer>
      <View style={{ marginTop: 20 }}>
        <DisplayCard />
        <Text style={{ fontFamily: "PlayfairDisplay_700Bold", fontSize: 40 }}>
          Inter Black
        </Text>
      </View>
    </MainContainer>
  );
};

export default Home;
