import React from 'react'
import { Text } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { withoutResultStyles as St } from './styles'

const WithoutResults = () => {
  return (
    <Animated.View
      entering={FadeInDown.springify().duration(1000).damping(20)}
      style={St.loaderContainer}
    >
      <Text style={St.notRestultText}>No se encontraron resultados</Text>
    </Animated.View>
  )
}

export default WithoutResults
