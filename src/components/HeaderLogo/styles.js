import { StyleSheet } from 'react-native'
import colors from '../../UI/colors'

export const headerLogo = StyleSheet.create({
  icon: {
    color: colors.white,
    transform: [{ rotate: '15deg' }],
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
  },
})
