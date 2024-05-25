import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import { PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display";
import Home from "./src/pages/Home";
import ProfilePage from "./src/pages/ProfilePage";

const Stack = createNativeStackNavigator();

function App() {
  // load all the custom fonts that will be used
  let [fontsLoaded, fontError] = useFonts({
    Raleway_400Regular,
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded && fontError) {
    console.log("Error loading fonts");
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="profile"
        screenOptions={{
          headerShown: false,
          headerBackVisible: true,
        }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
