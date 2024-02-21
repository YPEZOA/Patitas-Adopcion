import { StyleSheet } from 'react-native'
import colors from '../../../../UI/colors'

export const filterStyles = StyleSheet.create({
  filterContent: {
    marginTop: 30,
    display: 'flex',
    alignItems: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 2,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 100,
  },

  typeOptions: {
    display: 'flex',
    gap: 40,
  },
  typeOptionsContent: {
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    paddingHorizontal: 10,
  },
  option: {
    padding: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  optionText: {
    fontSize: 12,
    fontFamily: 'Quicksand-Bold',
  },
})
