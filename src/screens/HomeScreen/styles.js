import { Platform, StyleSheet } from 'react-native'
import colors from '../../UI/colors'

const paddingByPlatform = Platform.OS === 'android' ? 0 : 40
export const homeScreen = StyleSheet.create({
  containerMain: {
    backgroundColor: colors.primary,
    flex: 1,
    paddingTop: paddingByPlatform,
  },
  containerContent: {
    paddingHorizontal: 10,
    flex: 1,
    marginTop: 10,
    backgroundColor: '#ECEBEB',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  headerContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerButtonsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
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
  closeIcon: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 8,
  },
})
