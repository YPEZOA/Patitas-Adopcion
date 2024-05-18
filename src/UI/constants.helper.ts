export const genderIcon = (gender: string) => (gender === 'macho' ? 'symbol-male' : 'symbol-female')
export const genderColor = (gender: string) => (gender === 'macho' ? '#54B0DC' : '#F78B8B')
export const asideLabel = (text: string) => {
  return text.replace(/(<([^>]+)>)/gi, '')
}
