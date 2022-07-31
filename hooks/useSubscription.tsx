import { useEffect, useState } from "react";

import { User } from "firebase/auth";
import { database } from "../lib/firebase";
import { child, get, ref } from "firebase/database";
interface Subscription {
  createdDate: String;
  selectedPlan: Number;
  user: String;
  canceledDate: String;
}
function useSubscription(user: User | null) {
  const [subscription, setSubscription] = useState<any>(null);

  useEffect(() => {
    if (!user) return;
    const dbRef = ref(database);
    get(child(dbRef, `users/${user.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setSubscription(snapshot.val());
        } else {
          setSubscription(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  return subscription;
}

export default useSubscription;
