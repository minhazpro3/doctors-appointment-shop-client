import { useState, useEffect } from "react";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import initializeFirebaseApp from "../firebase/firebase.initialize";

initializeFirebaseApp();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [isLoading, setIsLoading] = useState(true);

  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login email and password
  const loginEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // save users

  const saveUsers = (saveUser) => {
    const info = {
      email: saveUser.email,
      role: "user",
    };
    fetch("https://doctors-appointmentandshop.onrender.com/saveUsers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  //  check admin
  useEffect(() => {
    fetch(
      `https://doctors-appointmentandshop.onrender.com/checkAdmin/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setAdmin(data[0]?.role);
        }
      });
  }, [user?.email]);

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [user?.displayName]);

  // updateName
  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {});
  };

  // user logout
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return {
    googleSignIn,
    user,
    isLoading,
    setUser,
    createUser,
    logOut,
    updateName,
    loginEmailPassword,
    setIsLoading,
    saveUsers,
    admin,
  };
};

export default useFirebase;
