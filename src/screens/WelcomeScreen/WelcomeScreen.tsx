import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { welcomeScreen as St } from './styles'
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native'
import Filters from '../HomeScreen/components/Filter/Filters'

const WelcomeScreen = () => {
  const rotate = useSharedValue(10)
  const navigation = useNavigation<any>()
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotate.value * 2}deg` }],
    }
  })

  useEffect(() => {
    rotate.value = withRepeat(withSpring(-rotate.value), 2, true)
  }, [])

  return (
    <View style={St.container}>
      <Animated.View style={animatedStyles}>
        <Icon style={St.pawIcon} name="paw" size={40} color={'white'} />
      </Animated.View>
      <View style={St.containerMain}>
        <Image
          style={{ width: 150, height: 150, borderRadius: 200 }}
          source={require('../../../assets/images/dog-cat.jpeg')}
        />
        <Text style={St.largeText}>
          Huachit
          <Icon name="paw" size={40} />s
        </Text>
      </View>
      <Animated.View entering={FadeInDown.springify().damping(8).duration(800)}>
        <TouchableOpacity
          style={St.nextStepButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={St.nextStepButtonText}>Encuentra animales</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}
export default WelcomeScreen
