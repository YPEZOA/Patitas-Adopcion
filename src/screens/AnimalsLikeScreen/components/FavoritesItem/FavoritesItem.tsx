import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { AnimalLiked } from '../../../../utils/models'
import IconF from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { favoriteStyles as St } from '../../styles'
import { genderColor, genderIcon } from '../../../../UI/constants.helper'
import colors from '../../../../UI/colors'
import http from '../../../../utils/helpers/http.helper'

interface FavoriteProps {
  index: number
  data: AnimalLiked
  onHandleRemoveFavorite: Function
}

const FavoritesItem = ({ index, data, onHandleRemoveFavorite }: FavoriteProps) => {
  const { id, nombre, imagen, genero, comuna, region, edad, estado } = data

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(300)
        .springify()
        .damping(24)}
      style={St.favoriteItem}
    >
      <Image source={{ uri: imagen }} style={St.image} />
      <View style={St.contentInfo}>
        <View style={St.nameContent}>
          <View>
            <Text style={St.name}>
              {nombre} <Text style={{ color: 'gray', fontSize: 12 }}>{edad}</Text>
            </Text>
          </View>
          <Icon name={genderIcon(genero)} color={genderColor(genero)} size={20} />
        </View>
        <View style={St.bottomContent}>
          <View>
            <Text style={St.state}>Estado: {estado === 'adopcion' ? 'adopción' : estado}</Text>
            <Text numberOfLines={1} style={St.location}>
              {comuna}, {region}
            </Text>
          </View>
          <View style={St.actionButtons}>
            <TouchableOpacity style={St.adoptButton} onPress={() => http.gotoAdoptUrl(id, nombre)}>
              <Text style={St.adoptButtonText}>Adóptame</Text>
            </TouchableOpacity>

            <TouchableOpacity style={St.heartIcon} onPress={() => onHandleRemoveFavorite(id)}>
              <IconF name="heart" color={colors.white} size={16} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.View>
  )
}

export default FavoritesItem
