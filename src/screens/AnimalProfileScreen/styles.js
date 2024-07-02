import { Platform, StyleSheet } from 'react-native'
import colors from '../../UI/colors'

const isIOS = Platform.OS === 'ios'
export const animalStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-end',
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '60%',
    position: 'absolute',
    top: 0,
    opacity: 0.8,
  },
  iconBack: {
    position: 'absolute',
    backgroundColor: colors.white,
    padding: 6,
    top: isIOS ? 60 : 20,
    left: 20,
    zIndex: 999,
    borderRadius: 100,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 7,
  },
  contentContainer: {
    maxHeight: 450,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  nameGenderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontFamily: 'Quicksand-Bold',
    color: colors.darkText,
    textTransform: 'capitalize',
  },
  infoContainer: { marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' },
  defaultText: {
    color: colors.neutralText,
    fontFamily: 'Quicksand-Bold',
  },
  locationContent: { marginTop: 20, flexDirection: 'row', alignItems: 'center' },
  descriptionsContainer: { flexDirection: 'column', gap: 10, marginTop: 20 },
  descriptionsText: { color: colors.darkText, lineHeight: 18, fontSize: 16 },
  actionsContainer: {
    paddingTop: 10,
    paddingBottom: isIOS ? 25 : 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  heartIconContainer: {
    padding: 14,
    borderRadius: 100,
  },
  adoptButtonContainer: {
    alignContent: 'middle',
    flexGrow: 1,
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 100,
    marginLeft: 10,
  },
})
