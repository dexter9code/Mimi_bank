import { useRef } from "react";
import { Pressable, Animated, StyleSheet, View, Text } from "react-native";
import { colors } from "./../../utils/colors";

const CustomBtn = ({ extraHanlder }) => {
  const color = useRef(new Animated.Value(0)).current;
  const barWidth = useRef(new Animated.Value(0)).current;

  const onPressHandler = () => {
    // Animated.timing(color, {
    //   toValue: 1,
    //   duration: 1000,
    //   useNativeDriver: false,
    // }).start(() => {
    //   Animated.timing(color, {
    //     toValue: 0,
    //     duration: 1000,
    //     useNativeDriver: false,
    //   }).start();
    // });
    Animated.timing(barWidth, {
      toValue: 320,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(barWidth, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });
    extraHanlder();
  };

  // const colorInterpolate = color.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [colors.purpleColor200, colors.purpleColor800],
  // });

  return (
    <Pressable onPress={onPressHandler} style={styles.rootContainer}>
      <Animated.View style={[styles.colorContainer, { width: barWidth }]} />
      <Text style={styles.text}>transfer</Text>
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
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.dodgerBlue700,
    letterSpacing: 2,
  },
  colorContainer: {
    width: 0,
    borderRadius: 24,
    height: 50,
    position: "absolute",
    backgroundColor: colors.purpleColor500,
  },
});
