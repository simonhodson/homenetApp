// =================== DATA TABLE =========================
// Token: firebase token
// ========================================================
import auth from '@react-native-firebase/auth';
import AsyncStorageService from './AsyncStorage';

class DataRequestsService extends AsyncStorageService {
  constructor() {
    super();
    this.FBLoginAnon = this.FBLoginAnon.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }

  //   isOnline = () => axios
  //     .get(healthUrl)
  //     .then(async (res) => {
  //       await this.FBLoginAnon();
  //       return res;
  //     })
  //     .catch((e) => {
  //       throw new Error(`${e.message} >>>> @IsOnline`);
  //     });

  authenticate(callback) {
    const user = auth().currentUser;
    if (user !== null) {
      user
        .getIdToken(true)
        .then((idToken) => {
          this.setStoredData('Token', idToken);
          // Take steps here to auth with API server
          callback(user);
        })
        .catch((error) => {
          console.log(error);
          callback(null);
        });
    } else {
      callback(null);
    }
  }

  // ******************************************
  // ***************** FIREBASE ***************
  // ******************************************

  FBLoginUsernamePassword(email, password, errorback) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error.code === 'auth/wrong-password') { errorback(error.code); }
        if (error.code === 'auth/invalid-email') { errorback(error.code); }
        console.log(error.code);
      });
  }

  FBSignOut(callback) {
    auth()
      .signOut()
      .catch((error) => {
        if (error.code === 'auth/no-current-user') {
          callback(null, error.code);
        }
        callback(null);
      });
  }

  FBLoginAnon() {
    return auth()
      .signInAnonymously()
      .then((data) => data)
      .catch((e) => {
        throw new Error(`>>>> @FBLoginAnon ${e.message}`);
      });
  }
} // End class

export default new DataRequestsService();
