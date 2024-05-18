import { StyleSheet } from 'react-native'
import colors from '../../UI/colors'

export const selectableStyles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    padding: 5,
    gap: 5,
  },
  itemText: {
    fontSize: 16,
    color: colors.secondary,
  },
})
