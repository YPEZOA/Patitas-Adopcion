import { StyleSheet } from 'react-native'
import colors from '../../../../UI/colors'

export const filtersModal = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: 540,
    paddingHorizontal: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.white,
  },
  headerContainer: {
    marginTop: 30,
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
    color: colors.darkText,
  },

  filterSubmitContainer: {
    marginVertical: 20,
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
  stateFilterContainer: {
    marginVertical: 20,
  },
  stateFilterTitle: { fontSize: 16, color: colors.neutralText, fontFamily: 'Quicksand-Bold' },
  stateFilterOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shadowOption: {
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  option: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 100,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  optionText: {
    fontSize: 16,
    textTransform: 'capitalize',
    fontFamily: 'Quicksand-Bold',
  },
})
