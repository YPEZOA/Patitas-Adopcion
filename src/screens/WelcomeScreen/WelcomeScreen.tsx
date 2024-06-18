import React from 'react'
import { View } from 'react-native'
import { welcomeScreen as St } from './styles'

import LinearGradient from 'react-native-linear-gradient'
import OnboardingCarousel from './components/OnboardingCarousel'

const WelcomeScreen = () => {
  return (
    <LinearGradient colors={['#F0B200', '#F37E29']} style={St.linear}>
      <View style={St.container}>
        <OnboardingCarousel />
      </View>
    </LinearGradient>
  )
}
export default WelcomeScreen
