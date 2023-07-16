import { db } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
import { doc, updateDoc, setDoc } from "firebase/firestore";

export const firestoreUpdateDocument = async (
  collectionName: string,
  documentID: string,
  data: object
) => {
  try {
    const documentRef = doc(db, collectionName, documentID);

    await updateDoc(documentRef, data);
    return { data: true };
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
export const firestoreCreateDocument = async (
  collectionName: string,
  documentID: string,
  data: object
) => {
  try {
    await setDoc(doc(db, collectionName, documentID), data);
    return { data: true };
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
