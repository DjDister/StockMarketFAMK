import firebase from "firebase/app";

const errorHandlers: {
  [key: string]: (error: firebase.FirebaseError) => string;
} = {
  "auth/email-already-in-use": (error) => {
    return "Email already in use";
  },
  "auth/invalid-email": (error) => {
    return "Invalid email";
  },
  "auth/operation-not-allowed": (error) => {
    return "Operation not allowed";
  },
  "auth/weak-password": (error) => {
    return "Weak password";
  },
  "auth/user-not-found": (error) => {
    return "User not found";
  },
  "auth/wrong-password": (error) => {
    return "Wrong password";
  },
  default: (error) => {
    return "Something went wrong";
  },
};
export default errorHandlers;
