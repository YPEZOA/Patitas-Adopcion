import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'

export type AnimalProps = {
  id: number
  nombre?: string
  tipo?: string
  color?: string
  edad?: string
  estado?: string
  genero?: string
  desc_fisica?: string
  desc_personalidad?: string
  desc_adicional?: string
  esterilizado?: number
  vacunas?: number
  imagen?: string
  equipo?: string
  region?: string
  comuna?: string
  url?: string
}

export interface LogoProps {
  width?: number
  height?: number
}

export interface CollapsiblePanelProps {
  title: string
  children: React.ReactNode
}

export interface AnimalLiked {
  id: number
  nombre: string
  imagen: string
  genero: string
  region: string
  comuna: string
  estado: string
  edad: string
  desc_fisica: string
  desc_personalidad: string
  desc_adicional: string
}

export type RootStackParamList = {
  Welcome: undefined
  Home: undefined
  AnimalProfile: undefined
  AnimalsLikes: undefined
}

export type ScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'Home' | 'Welcome' | 'AnimalProfile'
>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
