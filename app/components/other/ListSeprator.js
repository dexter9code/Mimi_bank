import { StyleSheet, View } from "react-native";
import { colors } from "./../../utils/colors";

function ListSeprator() {
  return <View style={styles.separator} />;
}

export default ListSeprator;

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.purpleColor500,
  },
});
