import React from 'react'
import { View } from 'react-native'
import { carouselItemStyles as St } from './styles'

interface ItemProps {
  item: { body?: any }
  index: number
}

const CarouselItem = ({ item }: ItemProps) => {
  return <View style={St.itemContainer}>{item.body}</View>
}

export default CarouselItem
