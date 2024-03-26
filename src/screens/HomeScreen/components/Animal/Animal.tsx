import React from 'react'
import { View, Text, Image } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { AnimalProps } from '../../../../utils/models'
import { animalStyles as St } from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import IconS from 'react-native-vector-icons/SimpleLineIcons'
import colors from '../../../../UI/colors'
import { genderColor, genderIcon } from '../../../../UI/constants.helper'

interface Props {
  data: AnimalProps
  index: number
}

const Animal = ({ data, index }: Props) => {
  const { nombre, comuna, imagen, genero, region } = data
  const isEven = index % 2 === 0

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(500)
        .springify()
        .damping(12)}
    >
      <View style={St.box}>
        <Image
          progressiveRenderingEnabled
          style={[St.image, { height: index % 3 === 0 ? 230 : 300 }]}
          source={{ uri: imagen }}
          defaultSource={require('../../../../../assets/images/back4.jpeg')}
        />
        <View style={[St.infoContainer, { marginLeft: isEven ? 0 : 6 }]}>
          <View style={St.infoContent}>
            <View style={St.nameSection}>
              <Text style={St.nameText}>{nombre}</Text>
              <IconS name={genderIcon(genero || '')} color={genderColor(genero || '')} size={20} />
            </View>
            <View style={St.location}>
              <Icon name="location-outline" size={20} color={colors.neutralText} />
              <Text style={St.locationText} ellipsizeMode="tail" numberOfLines={1}>
                {comuna}, {region}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Animated.View>
  )
}

export default Animal
