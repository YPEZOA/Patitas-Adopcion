import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Pressable, FlatList } from 'react-native'
import ReactNativeModal from 'react-native-modal'
import CollapsePanel from '../../../../components/Collapsible/Collapsible'
import Selectable from '../../../../components/Selectable/Selectable'
import { regions } from '../../../../config/data'
import IconF from 'react-native-vector-icons/Feather'
import IconI from 'react-native-vector-icons/Ionicons'
import { filtersModal as St } from './styles'
import { selectableStyles as SSt } from '../../../../components/Selectable/styles'
import colors from '../../../../UI/colors'
import useFiltersModal from './useFilterModal'
import { HomeContext } from '../../context'

const FiltersModal = () => {
  const { states, setters } = useContext(HomeContext)
  const { filterStates, filterSetters, actions } = useFiltersModal()
  const { state } = filterStates.filterParameters

  const animalStates = ['adopcion', 'encontrado', 'perdido']

  const isActive = (animalState: string) => state === animalState

  const onHandleSelectionItem = (item: any) => {
    filterSetters.setFilterParameters({ ...filterStates.filterParameters, region: item })
  }

  const onCloseModal = () => {
    setters.setShowFiltersModal(false)
  }

  const onHandleSubmit = () => {
    actions.getAnimalsByFiltered()
    setters.setShowFiltersModal(false)
  }

  return (
    <ReactNativeModal isVisible={states.showFiltersModal} style={{ margin: 0 }}>
      <View style={St.contentContainer} testID="filters-modal">
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
              {animalStates.map(animalState => {
                const shadowStyle = isActive(animalState) ? St.shadowOption : {}
                return (
                  <TouchableOpacity
                    testID="animal-state"
                    key={animalState}
                    onPress={() => {
                      filterSetters.setFilterParameters({
                        ...filterStates.filterParameters,
                        state: animalState,
                      })
                    }}
                    style={[
                      shadowStyle,
                      St.option,
                      { backgroundColor: isActive(animalState) ? colors.primary : 'transparent' },
                    ]}
                  >
                    <Text
                      style={[
                        St.optionText,
                        {
                          color: isActive(animalState) ? colors.white : colors.primary,
                        },
                      ]}
                    >
                      {animalState === 'adopcion' ? 'adopción' : animalState}
                    </Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          </View>
          {/* Animals filter by region and comuna */}
          <View>
            <CollapsePanel title="Región">
              <Selectable data={regions} onHandleSelection={onHandleSelectionItem} />
            </CollapsePanel>
            <CollapsePanel title="Comuna">
              {filterStates.getAvailableCommunes?.length ? (
                <FlatList
                  data={filterStates.getAvailableCommunes}
                  renderItem={({ item }: any) => (
                    <TouchableOpacity
                      style={SSt.itemContainer}
                      key={item.id}
                      onPress={() =>
                        filterSetters.setFilterParameters({
                          ...filterStates.filterParameters,
                          comuna: item.id,
                        })
                      }
                    >
                      <Text style={SSt.itemText}>{item.name}</Text>
                      {filterStates.filterParameters.comuna === item.id && (
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
          testID="apply-filters"
          disabled={states.fetching || !filterStates.anyFilterSelected}
          onPress={() => onHandleSubmit()}
          style={[St.filterSubmitContainer, { opacity: !filterStates.anyFilterSelected ? 0.8 : 1 }]}
        >
          <Text style={St.filterSubmitText}>aplicar</Text>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  )
}

export default FiltersModal
