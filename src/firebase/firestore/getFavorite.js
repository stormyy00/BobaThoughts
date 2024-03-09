import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebase_app);

export default async function getFavorites() {
  let user = null;
  const auth = getAuth();

  // Wait for the user to be available
  while (!user) {
    user = auth.currentUser;
    if (!user) {
      // Wait for 500 milliseconds before checking again
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }

  const userDocRef = doc(db, "favorites", user.uid);

  try {
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      return userData.stores || []; // Return the array of favorite restaurants
    } else {
      return []; // Return an empty array if the user document does not exist
    }
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return []; // Return an empty array in case of an error
  }
}
