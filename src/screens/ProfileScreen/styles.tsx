import { colors } from '@/src/theme';
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  profileInfo: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  taskInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginVertical: 10,
  },
  taskItem: {
    alignItems: 'center',
  },
  taskCount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6A3EA1',
  },
  taskLabel: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  role: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 10,
  },
  editProfileButton: {
    backgroundColor: '#6A3EA1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  editProfileText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  exploreSection: {
    paddingHorizontal: 20,
  },
  exploreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  exploreItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 15,
    width: '30%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  exploreText: {
    marginTop: 5,
    fontSize: 12,
    color: '#6A3EA1',
    textAlign: 'center',
  },
})

export default styles;
