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

// permet de mettre à jour les données d'authentification de l'utilisateur (i.e les données primaires de l'utilisateur)
export const updateUserAuthentificationData = async (
  uid: string,
  data: any
) => {
  const result = await fetch(
    "https://us-central1-codeurs-monkeys.cloudfunctions.net/updateUser",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid,
        data,
      }),
    }
  );

  if (!result.ok) {
    const errorResponse = await result.json();
    const firebaseError = errorResponse as FirebaseError;
    //TODO formater les erreurs
    return {
      error: {
        errorCode: firebaseError.code,
        errorMessage: firebaseError.message,
      },
    };
  }

  return { data: true };
};
