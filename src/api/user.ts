import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export type NewUser = {
  email: string;
  name: string;
  photo_url: string;
  lists?: [];
  invites?: [];
};

export const createNewUser = async (newUser: NewUser) => {
  return setDoc(doc(db, "users", newUser.email), {
    name: newUser.name,
    photo_url: newUser.photo_url,
    lists: newUser.lists || [],
    invites: newUser.invites || [],
  });
};
