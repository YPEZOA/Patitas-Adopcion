import { StyleSheet } from 'react-native'
import colors from '../../UI/colors'

export const welcomeScreen = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
  },
  containerMain: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  largeText: {
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    paddingHorizontal: 30,
    fontSize: 52,
    color: colors.white,
  },
  nextStepButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 70,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  nextStepButtonText: {
    fontSize: 17,
    color: colors.white,
    fontFamily: 'Quicksand-Bold',
  },
})
