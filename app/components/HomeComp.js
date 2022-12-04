import { useState, useContext } from "react";
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
import { colors } from "./../utils/colors";
import MoneyContext from "../context/moneyContext";

const HomeComp = () => {
  const [show, setShow] = useState(false);
  const moneyCtx = useContext(MoneyContext);

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
      colors={[colors.purpleColor200, colors.purpleColor800]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.containerContents}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/img/st.jpg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.containerName}>jocelyn flores</Text>
        <Text style={styles.containerPrice}>$ {moneyCtx.amount}</Text>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.text}>Activity</Text>
        <Text style={styles.historyText}>All history </Text>
      </View>
      <TransferModal show={show} closeHandler={ShowModal} />
      <View style={styles.flatContainer}>
        <FlatList
          data={moneyCtx.data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Activity
                amount={item.amount}
                imgUri={item.img}
                userName={item.title}
                transferType={item.type}
              />
            );
          }}
        />
      </View>
      <View style={styles.btnContainer}>
        <SimpleLineIcons
          name="plus"
          size={40}
          onPress={() => ShowModal("show")}
          style={styles.icon}
          color={colors.purpleColor100}
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
    marginVertical: 8,
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
    color: colors.white,
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
  middleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    alignItems: "center",
    marginBottom: 5,
  },
  historyText: {
    fontSize: 12,
    color: colors.gray,
    textTransform: "capitalize",
  },
});
