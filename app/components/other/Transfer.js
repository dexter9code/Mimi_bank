import { Text, View, StyleSheet } from "react-native";

const Transfer = ({ title }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexWrap: "wrap",
  },
  container: {
    backgroundColor: "red",
    width: 50,
    height: 80,
    flexDirection: "row",
  },
});
