import { StyleSheet } from 'react-native'
import colors from '../../UI/colors'

export const withoutResultStyles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notRestultText: {
    fontFamily: 'Quicksand-Bold',
    color: colors.secondary,
    fontSize: 36,
    textAlign: 'center',
  },
})
