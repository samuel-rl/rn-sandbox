import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Animated, { FadeIn, FadeOut, Layout, FadingTransition } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
const keywords = [
  'react',
  'react-native',
  'animation',
  'database',
];

const project = [
  {
    name: 'react-native-svg-animation',
    description: 'SVG Animation for react-native',
    keywords: ['react-native', 'animation'],
    color: '#CCD1E4',
  },
  {
    name: 'react-native-image-comparison',
    description: 'Image comparison for react-native',
    keywords: ['react-native', 'animation'],
    color: '#FE7E6D',
  },
  {
    name: 'react-native-image-parallax',
    description: 'Image parallax for react-native',
    keywords: ['react-native', 'animation'],
    color: '#2F3A8F',
  },
  {
    name: 'react-scroll',
    description: 'Chanel scroll for react-native',
    keywords: ['react', 'animation'],
    color: '#F6D860',
  },
  {
    name: 'react-database-example',
    description: 'Layout animation for react-native',
    keywords: ['react', 'database'],
    color: '#FFBD35',
  },
  {
    name: 'mongodb-atlas project',
    description: 'mongodb-atlas project',
    keywords: ['react', 'react-native', 'database'],
    color: '#8267BE',
  },
  {
    name: 'react-native-airbnb-clone',
    description: 'Image comparison for react-native',
    keywords: ['react-native', 'animation'],
    color: '#3FA796',
  },
];

const PROJECT_WIDTH = width / 2 - 20;
const PROJECT_HEIGHT = PROJECT_WIDTH;

const Keyword = ({keyword, onPress, isSelected}: any) => {
  return (
    <TouchableOpacity style={[
        styles.keywordContainer,
        { backgroundColor: isSelected ? '#041562' : '#11468F',}
        ]} 
        onPress={() => onPress(keyword)}
      >
      <Text style={styles.keywordText}>{keyword}</Text>
    </TouchableOpacity>
  )
}

const ProjectCard = ({project, index}: any) => {

  return (
    <Animated.View 
      style={[styles.projectContainer, { backgroundColor: project.color}]}
      entering={FadeIn.delay(150)}
      exiting={FadeOut.delay(150)}
      layout={Layout.springify()}
      >
      <Text>{project.name}</Text>
    </Animated.View>
  )
}

const LayoutAnimation = () => {
  const [selectedKeywords, setSelectedKeywords] = useState<null | string>(null);
  const [selectedProjects, setSelectedProjects] = useState<any>(project);

  const onKeywordPress = (keyword: string) => {
    if (selectedKeywords === keyword) {
      setSelectedKeywords(null);
      setSelectedProjects(project);
    } else {
      setSelectedKeywords(keyword);
      setSelectedProjects(project.filter((project: any) => project.keywords.includes(keyword)));
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollViewTop}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.keywordsContainerScrollview}
      >
        {keywords.map((keyword, index) => {
          return (
            <Keyword 
              key={index}
              keyword={keyword}
              onPress={onKeywordPress}
              isSelected={selectedKeywords===keyword}
            />
          )
        })}
      </ScrollView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
      }}
        style={styles.scrollViewBottom}
      >
        {selectedProjects.map((project: any, index: any) => {
          return (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
          )
        })}
         </ScrollView>
    </View>
  );
};

export default LayoutAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
  },
  scrollViewTop: {
    height: "15%"
  },
  scrollViewBottom: {
    height: "85%"
  },
  keywordsContainerScrollview: {
    alignItems: 'flex-end',
  },
  keywordContainer: {
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    height: 40,
  },
  keywordText: {
    fontWeight: 'bold',
    color: '#EEEEEE'
  },
  projectContainer: {
    width : PROJECT_WIDTH,
    height: PROJECT_HEIGHT,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});