import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'
import { loaderStyles as St } from './styles.js'

interface LoaderProps {
  isLoading: boolean
  children: React.ReactNode | Function
}

const IsLoading = ({ isLoading, children }: LoaderProps) => {
  if (isLoading) {
    return (
      <View style={St.loaderContainer}>
        <LottieView
          style={St.lottieLoading}
          source={require('../../../assets/animations/loading.json')}
          loop
          autoPlay
        />
      </View>
    )
  }

  return typeof children === 'function' ? children() : children
}

export default IsLoading
