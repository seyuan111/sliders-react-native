import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import slides from '../slides'

import SliderItems from '../components/SliderItems'

export default SliderPractice = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={slides} 
        renderItem={({item}) => <SliderItems item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });