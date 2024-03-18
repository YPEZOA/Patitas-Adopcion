import React, { useCallback, useEffect, useState } from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import FavoritesItem from './components/FavoritesItem/FavoritesItem'
import { getLikedsList, unlikedAnimal } from '../../utils/storage/storage'
import { favoriteStyles as St } from './styles'
import Icon from 'react-native-vector-icons/Feather'
import { AnimalLiked } from '../../utils/models'
import colors from '../../UI/colors'
import { useNavigation } from '@react-navigation/native'

const AnimalsLikeScreen = () => {
  const [favorites, setFavorites] = useState([])

  const navigation = useNavigation()

  const getFavorites = useCallback(async () => {
    const storage = await getLikedsList()
    setFavorites(storage.reverse())
  }, [])

  const handleRemoveFavorite = async (id: number) => {
    const newFavorites = favorites.filter((item: AnimalLiked) => item.id !== id)
    unlikedAnimal(id)
    setFavorites(newFavorites)
  }

  useEffect(() => {
    getFavorites()
  }, [getFavorites])

  return (
    <View style={St.containerMain}>
      <View style={St.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={St.iconBack}>
          <Icon name="arrow-left" size={25} color={colors.primary} />
        </TouchableOpacity>
        <Text style={St.headerTitle}>Favoritos</Text>
      </View>
      <View style={St.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={St.list}
          data={favorites}
          renderItem={({ item, index }) => (
            <FavoritesItem
              data={item}
              index={index}
              onHandleRemoveFavorite={handleRemoveFavorite}
            />
          )}
        />
      </View>
    </View>
  )
}

export default AnimalsLikeScreen
