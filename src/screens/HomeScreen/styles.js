import { StyleSheet } from 'react-native'
import colors from '../../UI/colors'

export const homeScreen = StyleSheet.create({
  containerMain: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    marginTop: 30,
  },
  inputContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#dcdcdc',
    borderRadius: 100,
  },
  inputIcon: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: colors.white,
  },
  headerLogoContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontFamily: 'Quicksand-Bold',
    color: colors.primary,
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#5e5e5e',
  },
})
