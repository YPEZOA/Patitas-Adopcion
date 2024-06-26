import React from 'react'
import { View } from 'react-native'
import { welcomeScreen as St } from './styles'

import LinearGradient from 'react-native-linear-gradient'
import OnboardingCarousel from './components/OnboardingCarousel'
import colors from '../../UI/colors'

const WelcomeScreen = () => {
  return (
    <LinearGradient colors={[colors.primaryLight, colors.primary]} style={St.linear}>
      <View style={St.container}>
        <OnboardingCarousel />
      </View>
    </LinearGradient>
  )
}
export default WelcomeScreen
