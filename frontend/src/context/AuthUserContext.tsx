import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import { UserDocument } from "@/types/user";
import React, { createContext, useContext } from "react";

interface Props {
  children: React.ReactNode;
}

const initialValue = {
  uid: "",
  email: "",
  displayName: "",
  emailVerified: false,
  phoneNumber: "",
  photoURL: "",
  userDocument: {} as UserDocument,
};

const AuthUserContext = createContext({
  authUser: initialValue,
  authUserIsLoading: true,
});

export const AuthUserProvider = ({ children }: Props) => {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider
      value={{
        authUser: auth.authUser as {
          uid: string;
          email: string;
          displayName: string;
          emailVerified: boolean;
          phoneNumber: string;
          photoURL: string;
          userDocument: UserDocument;
        },
        authUserIsLoading: auth.authUserIsLoading,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export const useAuth = () => {
  useContext(AuthUserContext);
};
