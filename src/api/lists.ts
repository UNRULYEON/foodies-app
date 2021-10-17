import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { getUserFromReference, User } from "./user";

export type List = {
  id: string;
  name: string;
  places: [];
  places_count: number;
  users: Pick<User, "name" | "photo_url">[];
};

export const UseUserListsSnapshot = (email: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [lists, setLists] = useState<List[]>([]);

  useEffect(() => {
    const getLists = async () => {
      const userRef = doc(db, "users", email);
      const userSnap = await getDoc(userRef);

      const listsRefs: { path: string }[] = userSnap.data()!.lists;

      const lists: List[] = await Promise.all(
        listsRefs.map(async (lr) => {
          const listRef = doc(db, lr.path);
          const listSnap = await getDoc(listRef);
          const userRefs: { path: string }[] = listSnap.data()!.users;
          const list = listSnap.data() as List;

          const users: List["users"] = await Promise.all(
            userRefs.map(async (ur) => {
              const user = await getUserFromReference(ur.path);
              return { name: user.name, photo_url: user.photo_url };
            })
          );

          return { ...list, id: listRef.id, users };
        })
      );

      setLists(lists);
      setLoading(false);
    };

    getLists();
  }, [email]);

  return [lists, loading] as const;
};
