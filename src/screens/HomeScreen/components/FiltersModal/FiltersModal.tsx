import React, { useContext } from 'react'
import { View, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native'
import { HomeContext } from '../../context'
import { filtersModal as St } from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import IconF from 'react-native-vector-icons/Feather'
import colors from '../../../../UI/colors'
import ReactNativeModal from 'react-native-modal'

const FiltersModal = () => {
  const { states, setters } = useContext(HomeContext)

  return (
    <ReactNativeModal isVisible={states.showFiltersModal} style={{ margin: 0 }}>
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={St.contentContainer}>
          <View style={St.headerContainer}>
            <View style={St.filterIconContainer}>
              <IconF name="filter" size={20} color={colors.secondary} />
              <Text style={St.filterIconText}>Filtros</Text>
            </View>
            <TouchableOpacity onPress={() => setters.setShowFiltersModal(false)}>
              <Icon name="close-outline" size={30} color={colors.secondary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ReactNativeModal>
  )
}

export default FiltersModal
