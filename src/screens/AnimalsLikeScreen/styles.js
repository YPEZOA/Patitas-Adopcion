import { Platform, StyleSheet } from 'react-native'
import colors from '../../UI/colors'

export const favoriteStyles = StyleSheet.create({
  containerMain: { flex: 1, backgroundColor: colors.primary },
  listContainer: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    marginTop: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginTop: Platform.OS === 'ios' ? 70 : 30,
  },
  iconBack: {
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 100,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 30,
    fontFamily: 'Quicksand-Bold',
    color: colors.white,
    marginRight: 20,
  },
  list: { paddingHorizontal: 14, paddingTop: 10 },
  favoriteItem: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: colors.white,
    marginBottom: 15,
    padding: 3,
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: '#000',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  contentInfo: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  nameContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
  },
  name: {
    fontSize: 18,
    color: colors.darkText,
    fontFamily: 'Quicksand-Bold',
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  state: {
    color: colors.neutralText,
    fontSize: 12,
  },
  location: {
    flex: 1,
    marginTop: 2,
    fontSize: 12,
    color: colors.neutralText,
  },
  heartIcon: {
    padding: 8,
    borderRadius: 100,
    backgroundColor: colors.primary,
  },
  adoptButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
    backgroundColor: colors.primary,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  adoptButtonText: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  withoutResultsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  withoutResultsText: {
    color: colors.darkText,
    fontSize: 46,
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
  },
})
