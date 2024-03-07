import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Pressable, FlatList } from 'react-native'
import { HomeContext } from '../../context'
import ReactNativeModal from 'react-native-modal'
import CollapsePanel from '../../../../components/Collapsible/Collapsible'
import Selectable from '../../../../components/Selectable/Selectable'
import { regions } from '../../../../config/data'
import { filtersModal as St } from './styles'
import IconF from 'react-native-vector-icons/Feather'
import IconI from 'react-native-vector-icons/Ionicons'
import colors from '../../../../UI/colors'
import { selectableStyles as SSt } from '../../../../components/Selectable/styles'

const FiltersModal = () => {
  const { states, setters, actions } = useContext(HomeContext)
  const { state } = states.filterParameters

  const animalStates = ['adopcion', 'encontrado', 'perdido']

  const isActive = (animalState: string) => state === animalState

  const onCloseModal = () => {
    setters.setShowFiltersModal(false)
    actions.resetModalData()
  }

  return (
    <ReactNativeModal isVisible={states.showFiltersModal} style={{ margin: 0 }}>
      <View style={St.contentContainer}>
        <View>
          <View style={St.headerContainer}>
            <View style={St.filterIconContainer}>
              <IconF name="filter" size={20} color={colors.secondary} />
              <Text style={St.filterIconText}>Filtros</Text>
            </View>
            <Pressable onPress={() => onCloseModal()}>
              <IconI name="close" size={25} color={colors.secondary} />
            </Pressable>
          </View>
          {/* Animals filter by state */}
          <View style={St.stateFilterContainer}>
            <Text style={St.stateFilterTitle}>Estado</Text>
            <View style={St.stateFilterOptions}>
              {animalStates.map(state => {
                const shadowStyle = isActive(state) ? St.shadowOption : {}
                return (
                  <TouchableOpacity
                    key={state}
                    onPress={() =>
                      setters.setFilterParameters({ ...states.filterParameters, state })
                    }
                    style={[
                      shadowStyle,
                      St.option,
                      { backgroundColor: isActive(state) ? colors.primary : 'transparent' },
                    ]}
                  >
                    <Text
                      style={[
                        St.optionText,
                        {
                          color: isActive(state) ? colors.white : colors.primary,
                        },
                      ]}
                    >
                      {state === 'adopcion' ? 'adopción' : state}
                    </Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          </View>
          {/* Animals filter by region and comuna */}
          <View>
            <CollapsePanel title="Región">
              <Selectable data={regions} />
            </CollapsePanel>
            <CollapsePanel title="Comuna">
              {states.getAvailableCommunes?.length ? (
                <FlatList
                  data={states.getAvailableCommunes}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={SSt.itemContainer}
                      key={item.id}
                      onPress={() =>
                        setters.setFilterParameters({ ...states.filterParameters, comuna: item.id })
                      }
                    >
                      <Text style={SSt.itemText}>{item.name}</Text>
                      {states.filterParameters.comuna === item.id && (
                        <IconF name="check" size={20} color={colors.primary} />
                      )}
                    </TouchableOpacity>
                  )}
                />
              ) : (
                <Text>Debe seleccionar una región</Text>
              )}
            </CollapsePanel>
          </View>
        </View>
        {/* Submit filter button */}
        <TouchableOpacity
          disabled={states.fetching || !states.anyFilterSelected}
          onPress={() => actions.getAnimalsByFiltered()}
          style={[St.filterSubmitContainer, { opacity: !states.anyFilterSelected ? 0.8 : 1 }]}
        >
          <Text style={St.filterSubmitText}>aplicar</Text>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  )
}

export default FiltersModal
