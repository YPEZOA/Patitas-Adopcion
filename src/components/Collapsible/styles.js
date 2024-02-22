import { StyleSheet } from 'react-native'

export const collapsible = StyleSheet.create({
  pressCollapsable: {
    marginTop: 10,
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#dcdcdc',
  },
  pressCollapsableHeader: {
    display: 'flex',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressCollapsableHeaderText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
  },
  collapsible: {
    backgroundColor: '#F4F4F4',
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  collapsibleContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})
