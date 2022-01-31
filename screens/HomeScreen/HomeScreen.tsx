import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {SlideInRight} from 'react-native-reanimated';
import { routes } from '../../utils/contants';
import { IRoute } from '../../utils/interfaces';

interface Screen extends IRoute{
  navigation: any;
}

const Screen = ({name, title, index, navigation}: Screen) => {
  return (
    <TouchableOpacity onPress={() => {navigation.navigate(name)}}>
      <Animated.View 
        style={styles.containerScreen}
        entering={SlideInRight.delay(index * 200)}
      >
        <Text style={styles.screenTitle}>{title}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
       <FlatList
        data={routes}
        renderItem={({item}) => item.name !== 'Home' ? <Screen navigation={navigation} {...item} /> : null}
        keyExtractor={(item) => item.index.toString()}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerScreen: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  screenTitle: {
    fontSize: 17,
  }
});
