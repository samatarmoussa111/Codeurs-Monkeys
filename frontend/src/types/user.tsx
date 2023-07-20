import { Timestamp } from "firebase/firestore";

export interface UserInterface {
  //Les informations primaires c a d qui proviennent de l'authentification
  uid: string;
  email: string | null;
  displayName: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  // Les informations qui proviennent de la base de donnée firestore
  userDocument?: UserDocument;
}

export interface UserDocument {
  uid: string;
  email: string;
  how_did_her: string;
  creation_date: Timestamp;
  onboardingIsCompleted: boolean;
  //....
}
