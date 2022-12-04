import { Modal, View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "./../../utils/colors";

const SuccessModal = () => {
  const onPressHandler = () => {
    console.log(`pressed`);
  };
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.titleText}>fund transferred</Text>
      <Text style={styles.titleText}>successful</Text>
      <Pressable style={styles.buttonContainer} onPress={onPressHandler}>
        <Text style={styles.text}>Close</Text>
      </Pressable>
    </View>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  rootContainer: {
    width: 350,
    height: 390,
    position: "absolute",
    zIndex: 2,
    backgroundColor: colors.purpleColor200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonContainer: {
    width: 150,
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: colors.purpleColor900,
    padding: 12,
    marginTop: 35,
  },
  text: {
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: "500",
    color: colors.purpleColor100,
  },
  titleText: {
    fontSize: 24,
    textTransform: "capitalize",
    fontWeight: "800",
    color: "green",
  },
  extraText: {
    margin: 1,
  },
});
