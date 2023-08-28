import { useEffect, useState } from "react";
import { initializeFirebaseApp } from "../login/firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// initialize firebase app
initializeFirebaseApp();

export const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, displayName, location, navigate) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName };
        setUser(newUser);
        // set user to the database
        saveUser(email, displayName, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName,
        })
          .then(() => {})
          .catch((error) => {});
        const destination = location?.state?.from || "/home";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  const loginUser = (email, password, location, navigate) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const destination = location?.state?.from || "/home";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  const signInWidthGoogle = (location, navigate) => {
    setIsloading(true);
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        const { email, displayName } = userCredential.user;
        saveUser(email, displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/home";
        navigate(destination);
        setIsLoginOpen(false);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  // obsurve user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  useEffect(() => {
    fetch(`https://travel-agency-0dnf.onrender.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data?.admin));
  }, [user]);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsloading(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://travel-agency-0dnf.onrender.com/users", {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    isLoading,
    registerUser,
    loginUser,
    signInWidthGoogle,
    logOut,
    admin,
    authError,
    isLoginOpen,
    setIsLoginOpen,
    isRegisterOpen,
    setIsRegisterOpen,
  };
};
