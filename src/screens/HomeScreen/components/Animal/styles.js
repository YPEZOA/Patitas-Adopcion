import { StyleSheet } from 'react-native'
import colors from '../../../../UI/colors'

export const animalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3,
    elevation: 8,
  },
  image: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 250,
  },
  infoContainer: {
    paddingVertical: 10,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 10,
  },
  infoContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 10,
  },
  typeBadge: {
    // backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  nameText: {
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
    textTransform: 'uppercase',
  },
})
