import React, { useEffect, useState } from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import FavoritesItem from './components/FavoritesItem/FavoritesItem'
import { getLikedsList, unlikedAnimal } from '../../utils/storage/storage'
import { favoriteStyles as St } from './styles'
import { AnimalLiked } from '../../utils/models'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import IconF from 'react-native-vector-icons/FontAwesome'
import colors from '../../UI/colors'

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
          <Icon name="arrow-left" size={35} color={colors.primary} />
        </TouchableOpacity>
        <Text style={St.headerTitle}>Tus favoritos</Text>
      </View>
      <View style={St.listContainer}>
        {favorites?.length > 0 ? (
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
        ) : (
          <View style={St.withoutResultsContainer}>
            <IconF name="paw" size={100} color={colors.primary} />
            <Text style={St.withoutResultsText}>Guarda aquí los animales que te gusten!</Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default AnimalsLikeScreen
