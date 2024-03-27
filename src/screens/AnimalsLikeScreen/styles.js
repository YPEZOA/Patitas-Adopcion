import { StyleSheet } from 'react-native'
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
    marginTop: 20,
  },
  iconBack: {
    backgroundColor: colors.white,
    padding: 5,
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
      width: 2,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 0.3,
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
    fontSize: 16,
    color: colors.secondary,
    fontFamily: 'Quicksand-Bold',
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  state: {
    color: colors.secondary,
    fontSize: 12,
  },
  location: {
    color: colors.secondary,
    flex: 1,
    width: 112,
    marginTop: 2,
    fontSize: 12,
  },
  heartIcon: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#ee6352',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 4,
    shadowColor: '#ee6352',
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  adoptButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  adoptButtonText: {
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
    color: colors.secondary,
    fontSize: 46,
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
  },
})
