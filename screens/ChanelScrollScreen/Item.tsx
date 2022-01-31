import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { LinearGradient } from 'expo-linear-gradient';
import { Item, MAX_HEIGHT, MIN_HEIGHT, width } from "./constants";

interface PictureElementProps {
  index: number;
  y: Animated.SharedValue<number>;
  item: Item;
  penultimate: boolean;
  onPress: (arg0: number) => void;
}

const PictureElement = ({
  y,
  index,
  penultimate,
  item: { title, subtitle, picture },
  onPress,
}: PictureElementProps) => {
  const style = useAnimatedStyle(() => {
    if(penultimate) {
      return {
        height: interpolate(
          y.value,
          [(index - 1) * MAX_HEIGHT, (index * MAX_HEIGHT) - MAX_HEIGHT * 2, (index * MAX_HEIGHT) - MAX_HEIGHT],
          [MIN_HEIGHT, (MAX_HEIGHT + MIN_HEIGHT) / 1.75, MAX_HEIGHT],
          Extrapolate.CLAMP
        ),
      };
    } else {
      return {
        height: interpolate(
          y.value,
          [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
          [MIN_HEIGHT, MAX_HEIGHT],
          Extrapolate.CLAMP
        ),
      };
    }
  });

  const titleStyle = useAnimatedStyle(() => {
    if(penultimate) {
      return {
        opacity: interpolate(
          y.value,
          [(index - 1) * MAX_HEIGHT, (index - 1) * MAX_HEIGHT - MAX_HEIGHT],
          [1, 0],
          Extrapolate.CLAMP
        ),
      };
    } else {
      return {
        opacity: interpolate(
          y.value,
          [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
          [0, 1],
          Extrapolate.CLAMP
        ),
      };
    }
  });

  return (
    <TouchableWithoutFeedback onPress={() => onPress(index)}>
      <Animated.View style={[styles.container, style]}>
        <Animated.Image
          source={picture}
          style={[styles.picture]}
        />
              <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.8)']}
          style={{ width: '100%', height: '50%', position: 'absolute' }}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>{title.toUpperCase()}</Text>
          <View style={styles.mainTitle}>
            <Animated.View style={titleStyle}>
              <Text style={styles.title}>{subtitle.toUpperCase()}</Text>
            </Animated.View>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default PictureElement;

const styles = StyleSheet.create({
  container: {
    width,
    height: MIN_HEIGHT,
    justifyContent: "flex-end",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "500",
  },
  titleContainer: {
    maxHeight: MAX_HEIGHT * 0.61,
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
  mainTitle: {
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
    bottom: 30,
  },
  subtitle: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});