import { StyleSheet } from 'react-native'
import colors from '../../../../UI/colors'

export const animalStyles = StyleSheet.create({
  box: {
    backgroundColor: colors.white,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
    padding: 10,
  },
  image: {
    height: 350,
    borderRadius: 30,
    backgroundColor: colors.secondary,
  },
  infoContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  infoContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginHorizontal: 8,
  },
  location: {
    width: '100%',
    paddingRight: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  nameText: {
    color: colors.secondary,
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
    textTransform: 'uppercase',
  },
  locationText: {
    color: colors.neutralText,
    fontSize: 13,
  },
  nameSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
