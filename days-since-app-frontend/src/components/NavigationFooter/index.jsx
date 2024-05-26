import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View, Pressable } from "react-native";
import theme from "../../theme";
import { useNavigation, useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
  footer: {
    backgroundColor: theme.colors.footerColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: theme.footerHeight,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingBottom: 25,
    paddingTop: 10,
    shadowOffset: {
      height: -8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  routeIconWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  currentRouteIconWrapper: {
    backgroundColor: theme.colors.primary,
  },
});

const footerIconSize = 30;

const NavigationFooter = () => {
  const navigation = useNavigation();
  const currentRoute = useRoute();

  const routes = [
    {
      iconName: "home",
      routeName: "home",
    },
    {
      iconName: "plussquareo",
      routeName: "new-habit",
    },
    {
      iconName: "user",
      routeName: "profile-page",
    },
  ];

  return (
    <View style={styles.footer}>
      {routes.map((route) => {
        const isCurrentRoute = route.routeName === currentRoute.name;

        return (
          <View
            style={[
              styles.routeIconWrapper,
              isCurrentRoute ? styles.currentRouteIconWrapper : "",
            ]}
            key={route.routeName}
          >
            <Pressable
              onPress={() => {
                navigation.navigate(route.routeName);
              }}
            >
              <AntDesign
                name={route.iconName}
                size={footerIconSize}
                color={isCurrentRoute ? theme.colors.textLight : "black"}
              />
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default NavigationFooter;
