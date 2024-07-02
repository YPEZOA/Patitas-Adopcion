import React from 'react'
import { TouchableOpacity, View, StatusBar, Text } from 'react-native'
import { homeScreen as St } from './styles'
import { HomeContext } from './context'
import useHome from './useHome'
import Animals from './components/Animals/Animals'
import IconF from 'react-native-vector-icons/Ionicons'
import Filters from './components/Filter/Filters'
import FiltersModal from './components/FiltersModal/FiltersModal'
import FilterResult from './components/FilterResult/FilterResult'
import { useNavigation } from '@react-navigation/native'
import colors from '../../UI/colors'
import LogoWithoutText from '../../UI/Icons/LogoWithoutText'

const HomeScreen = () => {
  const { states, actions, setters } = useHome()
  const navigation = useNavigation()

  return (
    <HomeContext.Provider value={{ states, actions, setters }}>
      <StatusBar backgroundColor={colors.primary} />
      <View style={St.containerMain}>
        {/* Header */}
        <View style={St.headerContainer}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <TouchableOpacity
              accessibilityLabel="Abrir filtros"
              testID="open-filters"
              onPress={() => setters.setShowFiltersModal(true)}
              style={St.closeIcon}
            >
              <IconF name="filter" size={40} color={colors.secondary} />
            </TouchableOpacity>
            <Text style={{ color: colors.white, fontSize: 14 }}>Filtrar</Text>
          </View>
          <LogoWithoutText />
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <TouchableOpacity
              accessibilityLabel="Ir a favoritos"
              onPress={() => navigation.navigate('AnimalsLikes')}
              style={St.closeIcon}
            >
              <IconF name="heart" size={40} color={colors.secondary} />
            </TouchableOpacity>
            <Text style={{ color: colors.white, fontSize: 14 }}>Favoritos</Text>
          </View>
        </View>
        {/* Animals list */}
        <View style={St.containerContent}>
          <Filters />
          {states.filterSubmited ? <FilterResult /> : <Animals />}
        </View>
      </View>
      {/* Filters Modal */}
      <FiltersModal />
    </HomeContext.Provider>
  )
}

export default HomeScreen
