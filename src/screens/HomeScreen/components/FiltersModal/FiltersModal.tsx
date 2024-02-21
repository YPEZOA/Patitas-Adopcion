import React, { useContext } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { HomeContext } from '../../context'
import { filtersModal as St } from './styles'
import Icon from 'react-native-vector-icons/Octicons'
import colors from '../../../../UI/colors'
import ReactNativeModal from 'react-native-modal'

const FiltersModal = () => {
  const { states, setters } = useContext(HomeContext)

  return (
    <ReactNativeModal
      isVisible={states.showFiltersModal}
      swipeDirection={'down'}
      onSwipeComplete={() => setters.setShowFiltersModal(false)}
      style={{ margin: 0 }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={St.contentContainer}>
          <View style={St.headerContainer}>
            <Icon name="horizontal-rule" size={40} color={colors.secondary} />
          </View>
        </View>
      </View>
    </ReactNativeModal>
  )
}

export default FiltersModal
