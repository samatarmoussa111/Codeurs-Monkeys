import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";

export const firebaseCreateUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return {
      data: userCredential.user,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    // TODO formater les erreurs
    return {
      error: {
        errorCode: firebaseError.code,
        errorMessage: firebaseError.message,
      },
    };
  }
};

export const firebaseSignInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return {
      data: userCredential.user,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    // TODO formater les erreurs
    return {
      error: {
        errorCode: firebaseError.code,
        errorMessage: firebaseError.message,
      },
    };
  }
};

export const firebaseLogoutUser = async () => {
  try {
    await signOut(auth);
    return {
      data: true,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    // TODO formater les erreurs
    return {
      error: {
        errorCode: firebaseError.code,
        errorMessage: firebaseError.message,
      },
    };
  }
};
export const firebaseSendEmailToResetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return {
      data: true,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    // TODO formater les erreurs
    return {
      error: {
        errorCode: firebaseError.code,
        errorMessage: firebaseError.message,
      },
    };
  }
};
export const firebaseSendEmailVerification = async () => {
  if (auth.currentUser) {
    try {
      await sendEmailVerification(auth.currentUser);
      return {
        data: true,
      };
    } catch (error) {
      const firebaseError = error as FirebaseError;
      // TODO formater les erreurs
      return {
        error: {
          errorCode: firebaseError.code,
          errorMessage: firebaseError.message,
        },
      };
    }
  } else {
    return {
      error: {
        code: "unknow",
        message: "Une erreur est survenue",
      },
    };
  }
};
