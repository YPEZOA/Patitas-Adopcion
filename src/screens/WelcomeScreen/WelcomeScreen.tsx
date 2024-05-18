import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { welcomeScreen as St } from './styles'
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated'
import LogoBeta from '../../UI/Icons/LogoBeta'
import LogoWithTag from '../../UI/Icons/LogoWithTag'

const WelcomeScreen = () => {
  const rotate = useSharedValue(5)
  const navigation = useNavigation()
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotate.value}deg` }],
    }
  })

  useEffect(() => {
    rotate.value = withRepeat(withSpring(-rotate.value), 2, true)
  }, [rotate])

  return (
    <ImageBackground source={require('../../../assets/images/back4.jpeg')} style={{ flex: 1 }}>
      <View style={St.container}>
        <Animated.View style={animatedStyles}>
          <LogoBeta />
        </Animated.View>
        <View style={St.containerMain}>
          <LogoWithTag width={300} height={100} />
        </View>
        <Animated.View entering={FadeInDown.delay(100).springify().damping(12).duration(1200)}>
          <TouchableOpacity style={St.nextStepButton} onPress={() => navigation.navigate('Home')}>
            <Text style={St.nextStepButtonText}>Encuentra animales</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ImageBackground>
  )
}
export default WelcomeScreen
