import { SafeAreaView, StyleSheet, View } from "react-native";
import NavigationFooter from "./NavigationFooter";
import theme from "../theme";
import IconListModal from "./NewHabitForm/IconListModal";
import { useRef, cloneElement } from "react";

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: theme.appMargin,
  },
});

const MainContainer = ({ children, currentRoute }) => {
  const modalRef = useRef(null);

  return (
    <SafeAreaView style={{ height: "100%", wdith: "100%" }}>
      <View style={styles.mainContainer}>
        {/* hacky fix to pass the modal ref to the child */}
        {/* {cloneElement(children, { openModal })} */}
        {cloneElement(children, { modalRef })}
      </View>
      <NavigationFooter currentRoute={currentRoute} />
      <IconListModal modalRef={modalRef} />
    </SafeAreaView>
  );
};

export default MainContainer;
