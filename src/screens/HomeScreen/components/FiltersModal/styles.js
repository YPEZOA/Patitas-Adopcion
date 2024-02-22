import { StyleSheet } from 'react-native'
import colors from '../../../../UI/colors'

export const filtersModal = StyleSheet.create({
  contentContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 500,
    paddingHorizontal: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.white,
  },
  headerContainer: {
    marginTop: 20,
    width: '100%',
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

  filterSubmitContainer: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 12,
  },
  filterSubmitText: {
    color: colors.white,
    fontFamily: 'Quicksand-Bold',
    textTransform: 'uppercase',
  },
})
