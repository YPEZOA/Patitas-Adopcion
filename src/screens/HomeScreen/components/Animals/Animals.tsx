import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native'
import { getAllAnimals } from '../../../../utils/helpers/http'
import Animal from '../Animal/Animal'
import Animated, { FadeInDown } from 'react-native-reanimated'

const Animals = () => {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    async function fn() {
      const animales = await getAllAnimals()
      setAnimals(animales.data)
    }
    fn()
  }, [])

  const renderItem = ({ item, index }: any) => (
    <Animal data={item} index={index} />
  )

  return (
    <Animated.View
      style={{ marginTop: 30 }}
      entering={FadeInDown.duration(500).springify()}
    >
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../../../../../assets/images/home-background.jpg')}
      />
      {!animals.length ? (
        <ActivityIndicator size={'large'} style={{ marginTop: 30 }} />
      ) : (
        <FlatList
          contentContainerStyle={{
            paddingBottom: 80,
            paddingTop: 20,
          }}
          showsVerticalScrollIndicator={false}
          data={animals}
          renderItem={renderItem}
          numColumns={2}
        />
      )}
    </Animated.View>
  )
}

export default Animals
