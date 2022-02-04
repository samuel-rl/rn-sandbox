import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
  scrollTo,
  useDerivedValue,
  withTiming,
  Easing
} from 'react-native-reanimated';
import PictureElement from './Item';
import { items, MAX_HEIGHT } from './constants';

const ChanelScrollScreen = () => {
  const scrollY = useSharedValue(0);
  const aref = useAnimatedRef<Animated.ScrollView>();
  const clickedItem = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y: value } }) => {
      scrollY.value = value;
    },
  });

  const onPress = (index: number) => {
    if(index === clickedItem.value || clickedItem.value === items.length - 1) {
      Alert.alert("Open : " + items[index].title);
      return;
    }

    clickedItem.value = index
  };

  useDerivedValue(() => {
    scrollTo(aref, 0, clickedItem.value * MAX_HEIGHT, true);
  });

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Animated.ScrollView
        ref={aref}
        bounces={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        snapToInterval={MAX_HEIGHT}
        decelerationRate={0}
        onMomentumScrollEnd={(e) => {
          clickedItem.value = Math.round(e.nativeEvent.contentOffset.y / MAX_HEIGHT);
        }}
      >
          {items.map((item, index) => (
            <PictureElement
              penultimate={index === items.length - 1}
              item={item}
              key={index}
              y={scrollY}
              index={index}
              onPress={onPress}
            />
          ))}
      </Animated.ScrollView>
    </>
  );
}

export default ChanelScrollScreen;

const styles = StyleSheet.create({
  container: {
    height: ((items.length) * MAX_HEIGHT),
  },
});
