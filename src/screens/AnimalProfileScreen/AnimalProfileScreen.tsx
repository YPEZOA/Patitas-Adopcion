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
import Animated, { FadeInDown } from 'react-native-reanimated'

import { animalByLiked, likedAnimal, unlikedAnimal } from '../../utils/storage/storage'
import http from '../../utils/helpers/http.helper'
import LinearGradient from 'react-native-linear-gradient'

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

  const handleLikeAnimal = () => {
    const payload = {
      id,
      nombre,
      imagen,
      genero,
      region,
      comuna,
      estado,
      edad,
      desc_adicional,
      desc_fisica,
      desc_personalidad,
    }
    animalIsLiked ? unlikedAnimal(id) : likedAnimal(payload)
    setAnimalIsLiked(!animalIsLiked)
  }

  useEffect(() => {
    async function fn() {
      const isLiked = await animalByLiked(id)
      setAnimalIsLiked(isLiked)
    }
    fn()
  }, [id])

  return (
    <View style={St.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={St.iconBack}>
        <Icon name="arrow-left" size={35} color={colors.primary} />
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
          <TouchableOpacity
            onPress={() => handleLikeAnimal()}
            style={[
              St.heartIconContainer,
              { backgroundColor: animalIsLiked ? '#ee6352' : colors.primary },
            ]}
          >
            <IconF name="heart" color={colors.white} size={22} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => http.gotoAdoptUrl(id, nombre)} style={{ flexGrow: 1 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 2, y: 0 }}
              colors={[colors.primary, colors.secondary]}
              style={St.adoptButtonContainer}
            >
              <Text style={{ textAlign: 'center', color: colors.white, fontSize: 18 }}>
                ADÓPTAME
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  )
}

export default AnimalProfileScreen
