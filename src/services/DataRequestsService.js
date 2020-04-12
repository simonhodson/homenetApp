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

  FBLoginUsernamePassword(email, password, callback) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => 'Success')
      .catch((error) => {
        if (error.code === 'auth/wrong-password') { callback(error.code); }
        if (error.code === 'auth/invalid-email') { callback(error.code); }
        console.log(error.code);
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
