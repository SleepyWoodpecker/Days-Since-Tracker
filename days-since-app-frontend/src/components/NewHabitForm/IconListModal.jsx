import { Text, View, StyleSheet, FlatList } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import theme from "../../theme";
import IconListItem from "./IconListItem";

const iconNames = [
  "warning",
  "slack",
  "frowno",
  "dingding",
  "instagram",
  "hourglass",
  "API",
  "tool",
  "aliwangwang-o1",
];

const styles = StyleSheet.create({
  modal: {
    padding: theme.appMargin,
    paddingTop: 0,
    color: theme.colors.accent,
  },
  textStyle: {
    fontFamily: theme.font.headerText,
    fontSize: theme.fontSize.h2,
    textAlign: "center",
    marginBottom: 15,
  },
});
// <AntDesign name="CodeSandbox" size={24} color="black" />

const IconListModal = ({ modalRef }) => {
  return (
    <BottomSheet
      ref={modalRef}
      snapPoints={["60%"]}
      // index={-1}
      style={styles.modal}
      backgroundStyle={{ backgroundColor: theme.colors.accent }}
      enablePanDownToClose
    >
      <BottomSheetView>
        <Text style={styles.textStyle}>Select an icon</Text>
        <FlatList
          style={{ height: "100%" }}
          data={iconNames}
          renderItem={(data) => <IconListItem iconName={data.item} />}
          numColumns={3}
          keyExtractor={(data) => data}
          columnWrapperStyle={{ height: "75%" }}
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

export default IconListModal;
