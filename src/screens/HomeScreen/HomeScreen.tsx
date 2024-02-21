import React from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { homeScreen as St } from './styles'
import { HomeContext } from './context'
import useHome from './useHome'
import Animals from './components/Animals/Animals'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconF from 'react-native-vector-icons/Ionicons'
import Filters from './components/Filter/Filters'
import FiltersModal from './components/FiltersModal/FiltersModal'
import colors from '../../UI/colors'

const HomeScreen = () => {
  const { states, actions, setters } = useHome()

  return (
    <HomeContext.Provider value={{ states, actions, setters }}>
      <View style={St.containerMain}>
        <StatusBar barStyle={'light-content'} />

        {/* Header */}
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 30,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={St.headerLogoContent}>
            <Text style={St.headerText}>
              Huachit
              <Icon name="paw" size={20} />s
            </Text>
            <Text style={St.headerLogoSmallText}>Encuentra y da familia</Text>
          </View>
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
