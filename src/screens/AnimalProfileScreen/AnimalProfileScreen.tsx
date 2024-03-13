import React, { useEffect, useState } from 'react'
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native'
import { ScreenRouteProps } from '../../utils/models'
import { animalStyles as St } from './styles'
import Icon from 'react-native-vector-icons/Feather'
import IconS from 'react-native-vector-icons/SimpleLineIcons'
import IconI from 'react-native-vector-icons/Ionicons'
import IconF from 'react-native-vector-icons/FontAwesome'
import colors from '../../UI/colors'
import { asideLabel, genderColor, genderIcon } from '../../UI/constants.helper'
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated'
import { animalByLiked, likedAnimal } from '../../utils/storage/storage'

const AnimalProfileScreen = ({ route, navigation }: ScreenRouteProps) => {
  const {
    id,
    nombre,
    esterilizado,
    genero,
    comuna,
    imagen,
    vacunas,
    region,
    edad,
    estado,
    desc_adicional,
    desc_fisica,
    desc_personalidad,
  }: any = route.params

  const [animalIsLiked, setAnimalIsLiked] = useState(false)

  const genderLetter = genero === 'macho' ? 'o' : 'a'
  const esterilizacion = esterilizado === 0 ? 'Sin esterilizar' : `Esterilizad${genderLetter}`
  const vacunacion = vacunas === 0 ? 'Sin Vacunar' : `Vacunad${genderLetter}`
  const heartSize = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        scale: heartSize.value,
      },
    ],
  }))

  const handleLikeAnimal = () => {
    const payload = { id, nombre }
    likedAnimal(payload)
    setAnimalIsLiked(!animalIsLiked)
    heartSize.value = withRepeat(withSpring(animalIsLiked ? 1 : 1.5), 2, true)
  }

  useEffect(() => {
    heartSize.value = 1
    async function fn() {
      const isLiked = await animalByLiked(id)
      setAnimalIsLiked(isLiked)
    }
    fn()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <View style={St.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={St.iconBack}>
        <Icon name="arrow-left" size={25} color={colors.primary} />
      </TouchableOpacity>
      <Image source={{ uri: imagen }} style={St.image} />
      <View style={St.contentContainer}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={St.nameGenderContent}>
            <Text style={St.name}>{nombre}</Text>
            <IconS name={genderIcon(genero)} color={genderColor(genero)} size={25} />
          </View>
          <View style={St.infoContainer}>
            <View>
              <Text style={St.defaultText}>
                Estado - {estado === 'adopcion' ? 'adopción' : estado}
              </Text>
              <Text style={St.defaultText}>{vacunacion}</Text>
              <Text style={St.defaultText}>{esterilizacion}</Text>

              <View style={St.locationContent}>
                <IconI name="location-sharp" size={20} color={colors.primary} />
                <Text style={[St.defaultText, { color: colors.secondary, fontSize: 16 }]}>
                  {comuna}, {region}
                </Text>
              </View>
            </View>
            <Text style={St.defaultText}>{edad}</Text>
          </View>
          <View style={St.descriptionsContainer}>
            <Text style={[St.defaultText, St.descriptionsText]}>
              {asideLabel(desc_fisica)} {asideLabel(desc_personalidad)}
              {asideLabel(desc_adicional)}
            </Text>
          </View>
        </ScrollView>

        <Animated.View entering={FadeInDown.delay(200).springify()} style={St.actionsContainer}>
          <TouchableOpacity style={St.heartIconContainer} onPress={() => handleLikeAnimal()}>
            <Animated.View style={animatedStyles}>
              <IconF name="heart" color={animalIsLiked ? '#ee6352' : colors.white} size={25} />
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity style={St.adoptButtonContainer}>
            <Text style={[St.defaultText, { textAlign: 'center', color: colors.white }]}>
              Adóptame
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  )
}

export default AnimalProfileScreen
