import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import { HomeContext } from '../../context'
import { filtersModal as St } from './styles'
import IconF from 'react-native-vector-icons/Feather'
import IconO from 'react-native-vector-icons/Octicons'
import colors from '../../../../UI/colors'
import ReactNativeModal from 'react-native-modal'
import Collapsible from 'react-native-collapsible'
import CollapsePanel from '../../../../components/Collapsible/Collapsible'

const FiltersModal = () => {
  const { states, setters } = useContext(HomeContext)
  const [collapsed, setCollapsed] = useState(true)

  return (
    <ReactNativeModal
      swipeDirection={'down'}
      onSwipeComplete={() => setters.setShowFiltersModal(false)}
      isVisible={states.showFiltersModal}
      style={{ margin: 0 }}
    >
      <View style={St.contentContainer}>
        <View style={{ alignItems: 'center' }}>
          <IconO name="horizontal-rule" size={40} color={colors.secondary} />
        </View>
        <View style={St.headerContainer}>
          <View style={St.filterIconContainer}>
            <IconF name="filter" size={20} color={colors.secondary} />
            <Text style={St.filterIconText}>Filtros</Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Animal state filter */}
          <CollapsePanel title="Estado">
            <Text>Hola como estaaas</Text>
          </CollapsePanel>

          {/* Submit filter */}
          <TouchableOpacity style={St.filterSubmitContainer}>
            <Text style={St.filterSubmitText}>aplicar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ReactNativeModal>
  )
}

export default FiltersModal
