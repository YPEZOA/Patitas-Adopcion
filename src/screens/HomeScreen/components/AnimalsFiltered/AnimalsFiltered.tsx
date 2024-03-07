import React, { useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HomeContext } from '../../context'
import Animal from '../Animal/Animal'
import MasonryList from '@react-native-seoul/masonry-list'

const AnimalsFiltered = () => {
  const { states } = useContext(HomeContext)
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <MasonryList
        ListHeaderComponent={<Text>Resultados de filtro</Text>}
        refreshControl={false}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        data={states.animalsFiltered}
        renderItem={({ item, i }: any) => (
          <Pressable onPress={() => navigation.navigate('AnimalProfile', item)}>
            <Animal data={item} index={i} />
          </Pressable>
        )}
        numColumns={2}
        onEndReachedThreshold={0.1}
        style={{ gap: 10 }}
      />
    </View>
  )
}

export default AnimalsFiltered
