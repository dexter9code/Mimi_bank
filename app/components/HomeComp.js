import { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Platform,
  Button,
  FlatList,
} from "react-native";
import { TRANSFER_TYPE, ACTIVITY_TYPE } from "./../utils/dev-data";
import Activity from "./other/Activity";
import { LinearGradient } from "expo-linear-gradient";

import TransferModal from "./other/TransferModal";

const HomeComp = () => {
  const [show, setShow] = useState(false);

  const ShowModal = (type) => {
    if (type === "show") {
      setShow(true);
    }
    if (type === "close") {
      setShow(false);
    }
  };

  return (
    <LinearGradient
      colors={["purple", "white"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.containerContents}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/img/default.jpg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.containerName}>jocelyn flores</Text>
        <Text style={styles.containerPrice}>$5010.22</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 12,
        }}
      >
        <Text style={styles.text}>Activity</Text>
        <Text style={styles.text}>All history </Text>
      </View>
      <TransferModal show={show} closeHandler={ShowModal} />
      <View style={styles.flatContainer}>
        <FlatList
          data={TRANSFER_TYPE}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <Activity amount={item.amount} />;
          }}
        />
      </View>
      <View style={styles.btnContainer}>
        <SimpleLineIcons
          name="plus"
          size={40}
          onPress={() => ShowModal("show")}
          style={styles.icon}
          color={"purple"}
        />
      </View>
    </LinearGradient>
  );
};

export default HomeComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContents: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    marginVertical: 15,
  },
  imageContainer: {
    width: 80,
    height: 80,
    overflow: "hidden",
    borderRadius: 50,
    marginTop: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  containerName: {
    marginVertical: 10,
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: "bold",
    color: "#ccc",
  },
  containerPrice: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#f7f7f7",
  },
  flatContainer: {
    flex: 8,
  },
  btnContainer: {
    flex: 1,
    backgroundColor: "rgba(141,20,136, 0)",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    bottom: 40,
  },
  text: {
    textTransform: "capitalize",
    fontSize: 16,
    color: "#ccc",
  },
});
