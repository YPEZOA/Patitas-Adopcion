import { StyleSheet } from 'react-native'
import colors from '../../../../UI/colors'

export const filtersModal = StyleSheet.create({
  contentContainer: {
    width: '100%',
    height: 400,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.white,
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
})
