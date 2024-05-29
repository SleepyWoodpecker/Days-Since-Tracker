import { Pressable, Text } from "react-native";
import MainContainer from "../components/MainContainer";

const ProfilePage = ({ navigation }) => {
  return (
    <MainContainer>
      <>
        <Text>Pofile Page</Text>
        <Pressable onPress={() => navigation.push("home")}>
          <Text>GO HOME</Text>
        </Pressable>
      </>
    </MainContainer>
  );
};

export default ProfilePage;
