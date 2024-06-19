import { StyleSheet } from 'react-native'
import colors from '../../../UI/colors'

export const carouselStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: colors.secondary,
    borderRadius: 90,
    paddingVertical: 25,
    width: '100%',
  },
  nextButtonText: {
    color: colors.white,
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: '500',
  },
  firstItemContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  firstItemText: {
    color: colors.white,
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Quicksand-Regular',
  },
  secondItemContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
  },
  secondItemContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  secondItemTitle: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 20,
    fontFamily: 'Quicksand-Bold',
  },
  secondItemText: {
    color: colors.white,
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Quicksand-Regular',
  },
})

export const carouselItemStyles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
