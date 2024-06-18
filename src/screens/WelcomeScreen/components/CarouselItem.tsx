import React from 'react'
import { View, Text } from 'react-native'
import { carouselItemStyles as St } from './styles'

interface ItemProps {
  item: { body?: any }
  index: number
}

const CarouselItem = ({ item }: ItemProps) => {
  return (
    <View style={St.itemContainer}>
      <Text>{item.body}</Text>
    </View>
  )
}

export default CarouselItem
