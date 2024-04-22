import React, { useCallback, useEffect, useState } from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import FavoritesItem from './components/FavoritesItem/FavoritesItem'
import { getLikedsList, unlikedAnimal } from '../../utils/storage/storage'
import { favoriteStyles as St } from './styles'
import { AnimalLiked } from '../../utils/models'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import colors from '../../UI/colors'
import LogoBeta from '../../UI/Icons/LogoBeta'

const AnimalsLikeScreen = () => {
  const [favorites, setFavorites] = useState([])

  const navigation = useNavigation()

  const handleRemoveFavorite = (id: number) => {
    const newFavorites = favorites.filter((item: AnimalLiked) => item.id !== id)
    unlikedAnimal(id)
    setFavorites(newFavorites)
  }

  useEffect(() => {
    async function getFavorites() {
      const storage = await getLikedsList()
      setFavorites(storage?.reverse())
    }
    getFavorites()
  }, [])

  return (
    <View style={St.containerMain}>
      <View style={St.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={St.iconBack}>
          <Icon name="arrow-left" size={25} color={colors.primary} />
        </TouchableOpacity>
        <Text style={St.headerTitle}>Tus favoritos</Text>
      </View>
      <View style={St.listContainer}>
        {!favorites?.length ? (
          <View style={St.withoutResultsContainer}>
            <LogoBeta width={200} height={200} />
            <Text style={St.withoutResultsText}>Aún no tienes favoritos</Text>
          </View>
        ) : (
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
        )}
      </View>
    </View>
  )
}

export default AnimalsLikeScreen
