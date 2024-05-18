import { StyleSheet } from 'react-native'
import colors from '../../../../UI/colors'

export const animalsStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 5,
  },
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
  titleList: {
    marginLeft: 10,
    marginBottom: 14,
    fontSize: 26,
    fontFamily: 'Quicksand-Bold',
    color: colors.secondary,
  },
})
