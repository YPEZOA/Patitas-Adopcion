import { StyleSheet } from 'react-native'
import colors from '../../UI/colors'

export const homeScreen = StyleSheet.create({
  containerMain: {
    backgroundColor: colors.primary,
    flex: 1,
    paddingTop: 40,
  },
  containerContent: {
    paddingHorizontal: 10,
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ECEBEB',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  headerLogoContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    fontFamily: 'Quicksand-Bold',
    color: colors.white,
  },
  headerLogoSmallText: {
    color: colors.white,
    fontSize: 12,
  },
})
