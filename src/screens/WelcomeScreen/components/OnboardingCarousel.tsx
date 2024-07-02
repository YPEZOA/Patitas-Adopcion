import React, { useRef, useState } from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import Logo from '../../../UI/Icons/Logo'
import CarouselItem from './CarouselItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import { carouselStyles as St } from './styles'
import colors from '../../../UI/colors'
import AdoptOnboarding from '../../../UI/Icons/AdoptOnboarding'
import Icon from 'react-native-vector-icons/FontAwesome'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const OnboardingCarousel = () => {
  const [index, setIndex] = useState(0)
  const navigation = useNavigation()
  const SLIDER_WIDTH = Dimensions.get('screen').width
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85)
  const carouselRef = useRef<any>(null)
  const data = [
    {
      body: (
        <View style={St.firstItemContainer}>
          <Animated.View entering={FadeInDown.damping(20).delay(100).duration(300)}>
            <Logo />
          </Animated.View>
          <Animated.View entering={FadeInDown.damping(20).delay(300).duration(300)}>
            <Text style={St.adoptionText}>Adopción</Text>
            <Text style={St.firstItemText}>Encuentra y adopta</Text>
          </Animated.View>
        </View>
      ),
    },
    {
      body: (
        <View style={St.secondItemContainer}>
          <View style={St.secondItemContent}>
            <Icon name="paw" color={colors.white} size={30} />
            <Text style={St.secondItemTitle}>
              Deja tu huella de esperanza con la adopción responsable
            </Text>
          </View>
          <AdoptOnboarding />
          <Text style={St.secondItemText}>
            Esta aplicación se alimenta con datos reales desde la plataforma de
            <Text style={{ fontWeight: '900' }}> huachitos.cl</Text>
          </Text>
          <TouchableOpacity style={St.nextButton} onPress={() => navigation.navigate('Home')}>
            <Text style={St.nextButtonText}>encuentra animales</Text>
          </TouchableOpacity>
        </View>
      ),
    },
  ]

  return (
    <SafeAreaView style={St.container}>
      <Carousel
        data={data}
        ref={carouselRef}
        layout="stack"
        layoutCardOffset={900}
        itemWidth={ITEM_WIDTH}
        sliderWidth={SLIDER_WIDTH}
        renderItem={CarouselItem}
        onSnapToItem={(indexItem: number) => setIndex(indexItem)}
      />
      <Pagination
        dotColor={colors.white}
        inactiveDotColor={colors.neutralText}
        dotsLength={data.length}
        activeDotIndex={index}
        inactiveDotOpacity={0.8}
        inactiveDotScale={0.7}
        dotStyle={{ width: 10, height: 10, borderRadius: 5 }}
      />
    </SafeAreaView>
  )
}

export default OnboardingCarousel
