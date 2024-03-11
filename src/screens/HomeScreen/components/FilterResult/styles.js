import { StyleSheet } from 'react-native'
import colors from '../../../../UI/colors'

export const filterResultStyles = StyleSheet.create({
  titleList: {
    fontSize: 26,
    fontFamily: 'Quicksand-Bold',
    color: colors.secondary,
  },
  filterList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  deleteFilter: { backgroundColor: colors.primary, borderRadius: 7, padding: 1 },
})
