import { useState } from "react";
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
    <View style={styles.container}>
      <View style={styles.containerContents}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/img/default.jpg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.containerName}>jocelyn flores</Text>
        <Text style={styles.containerPrice}>$500.22</Text>
      </View>
      <TransferModal show={show} closeHandler={ShowModal} />
      <View
        style={{
          flex: 6,
          backgroundColor: "dodgerblue",
        }}
      >
        <FlatList
          data={TRANSFER_TYPE}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <Activity amount={item.amount} />;
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Button title="show" onPress={() => ShowModal("show")} />
      </View>
    </View>
  );
};

export default HomeComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 8 : 10,
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
  },
  containerPrice: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
