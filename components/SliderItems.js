import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'

export default SliderItems = ({item}) => {
    const {width} = useWindowDimensions()
  return (
    <View style={[styles.container, {width}]}>
      <Image source={{ uri: item.image }} style={[styles.image, {width, resizeMode: "contain"}]} />

      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

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
    image: {
        flex: 0.7,
        justifyContent: 'center',
    },
    title: {
        fontWeight: "800",
        fontSize: 28,
        marginBottom: 10,
        color: "blue",
        textAlign: "center"
    },
    description: {
        fontWeight: "300",
        color: "blue",
        textAlign: "center",
        fontSize: 20,
        paddingHorizontal: 64
    }
  });