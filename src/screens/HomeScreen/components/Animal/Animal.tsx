import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { animalStyles as St } from './styles'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { AnimalProps } from '../../../../utils/models'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../../../UI/colors'

interface Props {
  data: AnimalProps
  index: number
}

const Animal = ({ data, index }: Props) => {
  const { nombre, tipo, comuna, imagen } = data
  const isEven = index % 2 == 0

  const typeColors = (type: string) => {
    if (type.length) {
    }
    const colorByType: any = {
      Perro: 'brown',
      Gato: 'green',
    }
    const color = colorByType[type]
    return color
  }

  return (
    <Animated.View
      style={[
        St.container,
        {
          paddingLeft: isEven ? 0 : 6,
          paddingRight: isEven ? 6 : 0,
        },
      ]}
      entering={FadeInDown.delay(index * 100)
        .duration(500)
        .springify()
        .damping(12)}
    >
      <Pressable style={St.box}>
        <Image style={St.image} source={{ uri: imagen }} />
        <View style={St.infoContainer}>
          <View
            style={[
              St.typeBadge,
              { backgroundColor: typeColors(tipo?.length ? tipo : '') },
            ]}
          >
            <Text style={{ color: colors.white }}>{tipo}</Text>
          </View>
          <View style={St.infoContent}>
            <Text style={St.nameText}>{nombre}</Text>
            <View style={St.location}>
              <Icon name="location-outline" size={20} />
              <Text>{comuna}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  )
}

export default Animal
