import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Animated } from 'react-native';
import { Gesture, GestureDetector, gestureHandlerRootHOC } from 'react-native-gesture-handler';


const {width, height} = Dimensions.get('window');

export const ITEM_WIDTH = width;
export const ITEM_HEIGHT = height * 0.6;

const MOVE_SIZE = {
  width: 4,
}

const ImageItem = ({ index, picture, scrollX}: any) => {
  const translateX = scrollX.interpolate({
    inputRange: [(index - 1) * width, (index * width), (index + 1) * width],
    outputRange: [-width, 0, width],
    extrapolate: 'clamp',
  })
return (
  <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
      <View style={[{
          width: ITEM_WIDTH,
          height: ITEM_HEIGHT,
          overflow: 'hidden',
          alignItems: 'center',
      }]}>
        <Animated.Image
          source={picture}
          style={{
            width: ITEM_WIDTH,
            height: ITEM_HEIGHT,
            resizeMode: 'contain',
            transform: [{ translateX }],
          }}
        />
      </View>
  </View>
);
}

const ImageComparison = gestureHandlerRootHOC(() => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<any>();

  const translateX = scrollX.interpolate({
    inputRange: [0, width / 2, width],
    outputRange: [width / 2 - MOVE_SIZE.width / 2, 0 , -width / 2 + MOVE_SIZE.width / 2],
  })

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        bounces={false}
        ref={scrollViewRef}
        onContentSizeChange={() => {
          if(scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: width/2, y: 0, animated: false });
          }
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true},
        )}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        overScrollMode="never"
      >
        <ImageItem
          index={0}
          picture={require('./assets/first.jpeg')}
          scrollX={scrollX}
        />
        <ImageItem 
          index={1}
          picture={require('./assets/second.jpeg')}
          scrollX={scrollX}
          />
      </Animated.ScrollView>
          <Animated.View
              style={{
                height: Image.resolveAssetSource(require('./assets/second.jpeg')).height 
                / Image.resolveAssetSource(require('./assets/second.jpeg')).width 
                * width,
                width: MOVE_SIZE.width,
                backgroundColor: 'black',
                position: 'absolute',
                borderRadius: MOVE_SIZE.width / 2,
                transform: [{ translateX }],
              }}
            />
    </View>
  );
});

export default ImageComparison;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: 'contain',
  },
});