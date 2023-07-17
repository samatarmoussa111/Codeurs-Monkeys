import { auth, db } from "@/config/firebase-config";
import { UserDocument, UserInterface } from "@/types/user";
import { User, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState<UserInterface | null>(null);
  const [authUserIsLoading, setAuthUserIsLoading] = useState(true);

  const formatAuthUser = (user: UserInterface) => {
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
    };
  };

  const getUserDocument = async (formatedUser: UserInterface) => {
    if (auth.currentUser) {
      //faire la requette de recuperation du document (du user)
      const documentRef = doc(db, "users", auth.currentUser.uid);
      onSnapshot(documentRef, async (userDoc) => {
        if (userDoc.exists()) {
          formatedUser.userDocument = userDoc.data() as UserDocument;
        }
        setAuthUser((prevAuthUser) => ({
          ...prevAuthUser,
          ...formatedUser,
        }));
        setAuthUserIsLoading(false);
      });
    }
  };

  const authStateChanged = async (user: UserInterface | User | null) => {
    if (!user) {
      setAuthUser(null);
      setAuthUserIsLoading(false);
      return;
    }
    setAuthUserIsLoading(true);
    const formatedUser = formatAuthUser(user);
    await getUserDocument(formatedUser);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => {
      unsubscribe();
    };
  }, []);

  return {
    authUser,
    authUserIsLoading,
  };
};

export default useFirebaseAuth;
