import { View, Text, StyleSheet, Image } from "react-native";

const Activity = ({ amount }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/img/default.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>Asos.com</Text>
          <Text>Jan 31, 2017</Text>
        </View>
      </View>
      <Text>+ ${amount}</Text>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: 50,
    height: 50,
    overflow: "hidden",
    borderRadius: 25,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 15,
  },
});
