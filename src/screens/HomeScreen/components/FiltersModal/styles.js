import { StyleSheet } from 'react-native'
import colors from '../../../../UI/colors'

export const filtersModal = StyleSheet.create({
  contentContainer: {
    width: '100%',
    height: 400,
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.white,
  },
  headerContainer: {
    width: '100%',
    isplay: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  filterIconText: {
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
    textTransform: 'uppercase',
    color: colors.secondary,
  },
})
