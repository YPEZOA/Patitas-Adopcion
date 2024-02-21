import { StyleSheet } from 'react-native'
import colors from '../../UI/colors'

export const welcomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00946b',
    justifyContent: 'space-around',
    alignItems: 'center',
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
  iconContainer: {
    marginTop: 20,
    padding: 7,
    backgroundColor: '#f2f2f2',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.14,
    shadowRadius: 3,
    elevation: 10,
  },
  pawIcon: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  nextStepButton: {
    backgroundColor: '#46c04e',
    borderRadius: 100,
    paddingHorizontal: 50,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    elevation: 4,
    shadowRadius: 5,
  },
  nextStepButtonText: {
    fontSize: 17,
    color: colors.white,
  },
})
