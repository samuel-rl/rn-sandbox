import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { Item, items, ITEM_HEIGHT, ITEM_WIDTH, width } from './constants';

interface ImageItemProps extends Item{
  index: number,
  scrollX: any,
}

const ImageItem = ({ index, picture, scrollX }: ImageItemProps) => {
    const translateX = scrollX.interpolate({
      inputRange: [(index - 1) * width, (index * width), (index + 1) * width],
      outputRange: [-width * 0.5, 0, width * 0.5],
      extrapolate: 'clamp',
    })
  return (
    <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{
          padding: 20,
          backgroundColor: 'white',
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.46,
          shadowRadius: 11.14,

          elevation: 17,
        }}>
        <View style={[{
            width: ITEM_WIDTH,
            height: ITEM_HEIGHT,
            overflow: 'hidden',
            alignItems: 'center',
            borderRadius: 14,
        }]}>
          <Animated.Image
            source={picture}
            style={{
              width: ITEM_WIDTH * 1.4,
              height: ITEM_HEIGHT,
              resizeMode: 'cover',
              transform: [{ translateX }],
            }}
          />
        </View>
      </View>
    </View>
  );
}

const ListImageAnimatedParallax = () => {

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={items}
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item, index}:any) => { return <ImageItem index={index} picture={item.picture} scrollX={scrollX} /> }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default ListImageAnimatedParallax;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
