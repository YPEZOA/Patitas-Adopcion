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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 20,
    paddingHorizontal: 20,
    gap: 20,
  },
  deleteFilter: { backgroundColor: colors.primary, borderRadius: 7, padding: 1 },
})
