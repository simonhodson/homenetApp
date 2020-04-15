// =================== DATA TABLE =========================
// @Token: firebase token
// ========================================================
import AsyncStorage from '@react-native-community/async-storage';
import AppConstants from '../../config/app-constants';

const { packageName } = AppConstants.App;

class AsyncStorageService {

  setStoredData = async (keyType, data) => {
    try {
      await AsyncStorage.setItem(`@${packageName}:${keyType}`, `${data}`);
    } catch (e) {
      console.log(`>>>>> AsyncStorage-StoreData-${e}`);
    }
  }

  getStoredData = async (key, callback) => {
    let value;
    try {
      value = await AsyncStorage.getItem(`@${packageName}:${key}`);
      if (value === undefined || value === '') {
        value = null;
      }
      if (callback) {
        callback(value);
      } else {
        return value;
      }
    } catch (e) {
      // error reading value
      console.log(`>>>>> AsyncStorage-GetData-${e}`);
    }
  }
}

export default AsyncStorageService;
