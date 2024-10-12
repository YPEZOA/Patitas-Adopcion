import React, { useContext } from 'react'
import { Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Octicons'
import Bird from '../../../../UI/Icons/Bird'
import Cat from '../../../../UI/Icons/Cat'
import Dog from '../../../../UI/Icons/Dog'
import Rabbit from '../../../../UI/Icons/Rabbit'
import colors from '../../../../UI/colors'
import { HomeContext } from '../../context'
import { filterStyles as St } from './styles'

const Filters = () => {
  const { states, setters, actions } = useContext(HomeContext)
  const types: any = ['Perro', 'Gato', 'Conejo', 'Roedor', 'Ave']

  const handleTypeSelected = (type: string) => {
    setters.setAnimalTypeSelected(type)
    setters.setFilterSubmited(false)
    actions.filterAnimalsByType(type)
    setters.setAnimalsFiltered([])
    renderIconByType(type)
  }

  const colorIconSelected = (type: string) =>
    states.animalTypeSelected === type ? colors.white : colors.neutralText

  const colorTextBySelectType = (type: string) =>
    typeSelectedEqualTo(type) ? colors.primary : colors.darkText

  const typeSelectedEqualTo = (type: string) => states.animalTypeSelected === type

  const enteringOS =
    Platform.OS === 'android'
      ? FadeInDown.springify()
      : FadeInDown.springify().delay(100).duration(1000)

  const renderIconByType = (type: string) => {
    const typeSelected: any = {
      Perro: <Dog color={colorIconSelected(type)} />,
      Gato: <Cat color={colorIconSelected(type)} />,
      Conejo: <Rabbit color={colorIconSelected(type)} />,
      Roedor: <Rabbit color={colorIconSelected(type)} />,
      Ave: <Bird color={colorIconSelected(type)} />,
    }

    return typeSelected[type]
  }

  return (
    <View style={St.filterContent}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={St.typeOptions}>
        <View style={St.typeOptionsContent}>
          {types.map((type: string) => (
            <Animated.View entering={enteringOS} key={type}>
              <TouchableOpacity
                accessibilityLabel={type}
                testID="animalType"
                disabled={states.animalTypeSelected === type || states.fetching}
                onPress={() => handleTypeSelected(type)}
                style={[
                  St.option,
                  {
                    backgroundColor: typeSelectedEqualTo(type) ? colors.primary : colors.white,
                  },
                ]}
              >
                {renderIconByType(type)}
              </TouchableOpacity>
              <View style={{ alignItems: 'center' }}>
                <Icon name="horizontal-rule" size={20} color={colorTextBySelectType(type)} />
                <Text
                  style={[
                    St.typeText,
                    {
                      color: colorTextBySelectType(type),
                    },
                  ]}
                >
                  {type}
                </Text>
              </View>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Filters
