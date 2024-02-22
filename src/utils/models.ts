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
