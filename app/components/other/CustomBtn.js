import { useRef } from "react";
import { Pressable, Animated, StyleSheet, View, Text } from "react-native";
import { colors } from "./../../utils/colors";

const CustomBtn = ({ extraHanlder }) => {
  const color = useRef(new Animated.Value(0)).current;

  const onPressHandler = () => {
    console.log("e");
    Animated.timing(color, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(color, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    });
    extraHanlder();
  };

  const colorInterpolate = color.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.purpleColor200, colors.purpleColor800],
  });

  return (
    <Pressable onPress={onPressHandler}>
      <Animated.View
        style={[styles.rootContainer, { backgroundColor: colorInterpolate }]}
      >
        <Text style={styles.text}>transfer</Text>
      </Animated.View>
    </Pressable>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  rootContainer: {
    width: 320,
    borderRadius: 24,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: colors.gray300,
  },
});
