import React, { useContext } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HomeContext } from '../../context'
import { animalsStyles as St } from '../Animals/styles'
import Animal from '../Animal/Animal'
import IsLoading from '../../../../components/IsLoading/IsLoading'
import WithoutResults from '../../../../components/WithoutResults/WithoutResults'

const Animals = () => {
  const { states } = useContext(HomeContext)
  const navigation = useNavigation()

  return (
    <IsLoading isLoading={states.fetching}>
      {states.fetchWithoutData ? (
        <WithoutResults />
      ) : (
        <View style={St.container}>
          <FlatList
            testID="animals-list"
            ListHeaderComponent={<Text style={St.titleList}>Esperan por ti</Text>}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            data={states.animalsFiltered.length > 0 ? states.animalsFiltered : states.allAnimals}
            renderItem={({ item, index }: any) => (
              <Pressable
                testID="animal-profile-navigate"
                onPress={() => navigation.navigate('AnimalProfile', item)}
              >
                <Animal data={item} index={index} />
              </Pressable>
            )}
            numColumns={2}
          />
        </View>
      )}
    </IsLoading>
  )
}

export default Animals
