import React from 'react'
import { View, Text, StatusBar, Image, ImageBackground } from 'react-native'
import { ScreenRouteProps } from '../../utils/models'
import Icon from 'react-native-vector-icons/Feather'
import { animalStyles as St } from './styles'

const AnimalProfileScreen = ({ route, navigation }: ScreenRouteProps) => {
  const { comuna, desc_adicional, imagen, vacunas, region, edad, equipo, estado } = route.params
  console.log(route.params)
  return (
    <View style={St.container}>
      {/* <Icon name="plus" size={40} onPress={() => navigation.goBack()} /> */}
      <Image source={{ uri: imagen }} style={St.image} />
    </View>
  )
}

export default AnimalProfileScreen
