import React, {createContext, useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';

export const authContext = createContext();

export function ProvideAuth({children}) {
  const providedAuth = useProvideAuth();
  return (
    <authContext.Provider value={providedAuth}>{children}</authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const googleLogin = async () => {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  };

  const login = (email, password) => {
    return auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        firestore()
          .collection('users')
          .doc(response.user.uid)
          .get()
          .then(doc => {
            setUserData(doc.data());
          });
        return response.user;
      });
  };

  const logout = () => {
    return auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  const signup = (email, password) => {
    return auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        firestore()
          .collection('users')
          .doc(response.user.uid)
          .set({
            displayName: response.user.displayName,
            email: response.user.email,
            emailVerified: response.user.emailVerified,
            phoneNumber: response.user.phoneNumber,
            photoURL: response.user.photoURL,
            uid: response.user.uid,
            birdData: {
              favoriteBird: '',
              lifeList: [],
            },
            metadata: {
              creationTime: response.user.metadata.creationTime,
              lastSignInTime: response.user.metadata.lastSignInTime,
            },
          })
          .then(() => {
            console.log('User added!');
          });
        return response.user;
      });
  };

  const updateUser = async newValues => {
    try {
      await auth().currentUser.updateProfile(newValues);
      await firestore().collection('users').doc(user.uid).update(newValues);
      setUser(auth().currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  const sendPasswordResetEmail = email => {
    return auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = (code, password) => {
    return auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(givenUser => {
      if (givenUser) {
        setUser(givenUser);
        firestore()
          .collection('users')
          .doc(givenUser.uid)
          .onSnapshot(doc => {
            setUserData(doc.data());
          });
      } else {
        setUser(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    userData,
    googleLogin,
    login,
    logout,
    updateUser,
    signup,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
