import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import { PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display";
import Home from "./src/pages/Home";
import ProfilePage from "./src/pages/ProfilePage";
import AddNewHabitPage from "./src/pages/AddNewHabitPage";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="add-new-habit-page"
            screenOptions={{
              headerShown: false,
              headerBackVisible: true,
            }}
          >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="profile-page" component={ProfilePage} />
            <Stack.Screen
              name="add-new-habit-page"
              component={AddNewHabitPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
