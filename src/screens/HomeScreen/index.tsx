import React from 'react'
import { TouchableOpacity, View, StatusBar, Pressable, Text } from 'react-native'
import { homeScreen as St } from './styles'
import { HomeContext } from './context'
import useHome from './useHome'
import Animals from './components/Animals/Animals'
import IconF from 'react-native-vector-icons/Ionicons'
import Filters from './components/Filter/Filters'
import FiltersModal from './components/FiltersModal/FiltersModal'
import LightLogoText from '../../UI/Icons/LogoWithTagLight'
import FilterResult from './components/FilterResult/FilterResult'
import { useNavigation } from '@react-navigation/native'
import colors from '../../UI/colors'

const HomeScreen = () => {
  const { states, actions, setters } = useHome()
  const navigation = useNavigation()

  return (
    <HomeContext.Provider value={{ states, actions, setters }}>
      <StatusBar backgroundColor={colors.primary} />
      {/* <Pressable onPress={() =>  */}
      {/*   <Text>FAVORITES</Text> */}
      {/* </Pressable> */}
      <View style={St.containerMain}>
        {/* Header */}
        <View style={St.headerContainer}>
          <LightLogoText width={220} height={70} />
          <View style={St.headerButtonsContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AnimalsLikes')}
              style={St.closeIcon}
            >
              <IconF name="heart" size={30} color="#ee6352" />
            </TouchableOpacity>
            <TouchableOpacity
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
