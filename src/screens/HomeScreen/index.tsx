import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { homeScreen as St } from './styles'
import { HomeContext } from './context'
import useHome from './useHome'
import Animals from './components/Animals/Animals'
import IconF from 'react-native-vector-icons/Ionicons'
import Filters from './components/Filter/Filters'
import FiltersModal from './components/FiltersModal/FiltersModal'
import colors from '../../UI/colors'
import LightLogoText from '../../UI/Icons/LogoWithTagLight'
import { StatusBar } from 'react-native'

const HomeScreen = () => {
  const { states, actions, setters } = useHome()

  return (
    <HomeContext.Provider value={{ states, actions, setters }}>
      <StatusBar backgroundColor={colors.primary} />
      <View style={St.containerMain}>
        {/* Header */}
        <View style={St.headerContainer}>
          <LightLogoText width={160} height={70} />
          <TouchableOpacity
            onPress={() => setters.setShowFiltersModal(true)}
            style={{
              backgroundColor: colors.white,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <IconF name="filter" size={22} color={colors.secondary} />
          </TouchableOpacity>
        </View>
        {/* Filter */}
        <View style={St.containerContent}>
          <Filters />
          {/* Animals list */}
          <Animals />
        </View>
      </View>
      {/* Filters Modal */}
      <FiltersModal />
    </HomeContext.Provider>
  )
}

export default HomeScreen
