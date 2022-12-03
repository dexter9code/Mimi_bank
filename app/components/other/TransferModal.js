import { View, Button, Text, StyleSheet, Modal } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  Fontisto,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const TransferModal = ({ show, closeHandler }) => {
  return (
    <Modal visible={show} animationType={"slide"}>
      <View style={styles.rootContainer}>
        <View style={styles.extraContainer} />
        <View style={styles.container}>
          <View
            style={[
              styles.containerContents,
              { backgroundColor: "dodgerblue" },
            ]}
          >
            <Feather name="send" size={20} />
            <Text style={styles.titles}>Transfer-Money</Text>
          </View>
          <View style={styles.lineContainer} />
          <View
            style={[styles.containerContents, { backgroundColor: "yellow" }]}
          >
            <MaterialCommunityIcons name="airplane-marker" size={20} />
            <Text style={styles.titles}>Book Air</Text>
          </View>
          <View style={styles.lineContainer} />
          <View style={[styles.containerContents, { backgroundColor: "blue" }]}>
            <Fontisto name="train-ticket" size={20} />
            <Text style={styles.titles}>Book Rail</Text>
          </View>
          <View style={styles.lineContainer} />
          <View style={[styles.containerContents]}>
            <MaterialIcons name="local-atm" size={20} />
            <Text style={styles.titles}>Mini ATM</Text>
          </View>
        </View>
        <View style={styles.closeContainer}>
          <SimpleLineIcons
            name="close"
            size={40}
            onPress={() => closeHandler("close")}
          />
        </View>
      </View>
    </Modal>
  );
};

export default TransferModal;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: "red",
    textTransform: "capitalize",
    paddingBottom: 10,
  },
  containerContents: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 18,
    alignItems: "center",
    // marginBottom: 20,
  },
  titles: {
    paddingHorizontal: 10,
    fontSize: 18,
  },
  closeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  lineContainer: {
    width: "100%",
    backgroundColor: "#272",
    height: 5,
    marginBottom: 10,
  },
  extraContainer: {
    width: "100%",
    height: 20,
    marginBottom: 12,
  },
});
