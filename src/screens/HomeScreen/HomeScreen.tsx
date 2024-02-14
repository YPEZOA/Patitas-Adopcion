import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { homeScreen as St } from './styles'
import { getAllAnimals } from '../../utils/helpers/http'
import Animals from './components/Animals/Animals'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../../UI/colors'

const HomeScreen = () => {
  useEffect(() => {
    getAllAnimals()
  }, [])

  const navigation = useNavigation()

  return (
    <View style={St.containerMain}>
      <View style={St.headerLogoContent}>
        <Text style={St.headerText}>
          Huachit
          <Icon name="paw" size={20} />s
        </Text>
        <Text style={{ color: colors.primary, fontSize: 10 }}>
          Encuentra y da familia
        </Text>
      </View>
      <Animals />
    </View>
  )
}

export default HomeScreen
