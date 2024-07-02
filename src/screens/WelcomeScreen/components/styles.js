import { Dimensions, Platform, StyleSheet } from 'react-native'
import colors from '../../../UI/colors'

const ITEM_WIDTH = Dimensions.get('screen').width * 0.85

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
    paddingVertical: 20,
    width: '100%',
  },
  nextButtonText: {
    color: colors.white,
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  firstItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstItemText: {
    color: colors.white,
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Quicksand-Regular',
  },
  adoptionText: {
    color: '#FFF',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Quicksand-Bold',
    textTransform: 'uppercase',
    letterSpacing: 18,
  },
  secondItemContainer: {
    width: Platform.OS === 'android' ? ITEM_WIDTH : '',
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
    justifyContent: 'space-between',
  },
  secondItemTitle: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 22,
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
