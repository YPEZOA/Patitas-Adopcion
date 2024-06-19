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

const HomeScreen = () => {
  const { states, actions, setters } = useHome()
  const navigation = useNavigation()

  return (
    <HomeContext.Provider value={{ states, actions, setters }}>
      <StatusBar backgroundColor={colors.primary} />
      <View style={St.containerMain}>
        {/* Header */}
        <View style={St.headerContainer}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <IconF
              name="paw"
              size={50}
              color={colors.secondary}
              style={{ transform: [{ rotate: '-30deg' }] }}
            />
            <View style={{ alignItems: 'center' }}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 24,
                  fontFamily: 'Quicksand-Bold',
                }}
              >
                Patitas
              </Text>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 14,
                  fontFamily: 'Quicksand-Bold',
                }}
              >
                Adopción
              </Text>
            </View>
          </View>

          <View style={St.headerButtonsContainer}>
            <TouchableOpacity
              accessibilityLabel="Ir a favoritos"
              onPress={() => navigation.navigate('AnimalsLikes')}
              style={St.closeIcon}
            >
              <IconF name="heart" size={30} color={colors.secondary} />
            </TouchableOpacity>
            <TouchableOpacity
              accessibilityLabel="Abrir filtros"
              testID="open-filters"
              onPress={() => setters.setShowFiltersModal(true)}
              style={St.closeIcon}
            >
              <IconF name="filter" size={30} color={colors.secondary} />
            </TouchableOpacity>
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
