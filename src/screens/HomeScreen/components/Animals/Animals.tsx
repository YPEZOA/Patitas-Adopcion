import React, { useContext } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { HomeContext } from '../../context'
import Animal from '../Animal/Animal'
import MasonryList from '@react-native-seoul/masonry-list'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { animalsStyles as St } from '../Animals/styles'
import colors from '../../../../UI/colors'

const Animals = () => {
  const { states } = useContext(HomeContext)

  if (!states.allAnimals.length && !states.fetching)
    return (
      <Animated.View
        entering={FadeInDown.springify().duration(1000).damping(20)}
        style={St.loaderContainer}
      >
        <Text style={St.notRestultText}>No se encontraron resultados</Text>
      </Animated.View>
    )

  return (
    <View style={St.container}>
      {states.fetching ? (
        <View style={St.loaderContainer}>
          <ActivityIndicator color={colors.secondary} size="large" />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <MasonryList
            ListHeaderComponent={
              <Text style={St.titleList}>Esperan por ti</Text>
            }
            refreshControl={false}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            data={states.allAnimals}
            renderItem={({ item, i }: any) => <Animal data={item} index={i} />}
            numColumns={2}
            onEndReachedThreshold={0.1}
            style={{ gap: 10 }}
          />
        </View>
      )}
    </View>
  )
}

export default Animals
