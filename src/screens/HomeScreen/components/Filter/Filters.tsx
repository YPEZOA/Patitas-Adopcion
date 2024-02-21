import React, { useContext } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { filterStyles as St } from './styles'
import { HomeContext } from '../../context'
import Animated, { FadeInDown } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/Octicons'
import Dog from '../../../../UI/Icons/Dog'
import Cat from '../../../../UI/Icons/Cat'
import Rabbit from '../../../../UI/Icons/Rabbit'
import Bird from '../../../../UI/Icons/Bird'
import colors from '../../../../UI/colors'

const Filters = () => {
  const { states, setters, actions } = useContext(HomeContext)
  const types: any = ['Perro', 'Gato', 'Conejo', 'Roedor', 'Ave']

  const handleTypeSelected = (type: string) => {
    setters.setAnimalTypeSelected(type)
    actions.filterAnimalsByType(type)
    renderIconByType(type)
  }

  const colorIconSelected = (type: string) =>
    states.animalTypeSelected === type ? colors.white : colors.secondary

  const colorTextBySelectType = (type: string) =>
    typeSelectedEqualTo(type) ? colors.primary : colors.secondary

  const typeSelectedEqualTo = (type: string) =>
    states.animalTypeSelected === type

  const renderIconByType = (type: string) => {
    switch (type) {
      case 'Perro':
        return <Dog color={colorIconSelected(type)} />
      case 'Gato':
        return <Cat color={colorIconSelected(type)} />
      case 'Conejo':
        return <Rabbit color={colorIconSelected(type)} />
      case 'Roedor':
        return <Cat color={colorIconSelected(type)} />
      case 'Ave':
        return <Bird color={colorIconSelected(type)} />

      default:
        break
    }
  }

  return (
    <View style={St.filterContent}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={St.typeOptions}
      >
        <View style={St.typeOptionsContent}>
          {types.map((type: string) => (
            <Animated.View
              entering={FadeInDown.springify().delay(100).duration(1000)}
              key={type}
            >
              <TouchableOpacity
                disabled={states.animalTypeSelected === type || states.fetching}
                onPress={() => handleTypeSelected(type)}
                style={[
                  St.option,
                  {
                    backgroundColor: typeSelectedEqualTo(type)
                      ? colors.primary
                      : colors.white,
                  },
                ]}
              >
                {renderIconByType(type)}
              </TouchableOpacity>
              <View style={{ alignItems: 'center' }}>
                <Icon
                  name="horizontal-rule"
                  size={20}
                  color={colorTextBySelectType(type)}
                />
                <Text
                  style={{
                    color: colorTextBySelectType(type),
                    fontFamily: 'Quicksand-Bold',
                    fontSize: 13,
                    letterSpacing: -0.5,
                  }}
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
