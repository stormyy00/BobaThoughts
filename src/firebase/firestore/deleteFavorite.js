import firebase_app from "../config";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebase_app);

export default async function deleteFavorite(restaurantName) {
  const auth = getAuth();
  const user = auth.currentUser;
  const userDocRef = doc(db, "favorites", user.uid);

  try {
    // Check if the user document exists
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      // If the user document exists, update the favorite stores array
      await updateDoc(userDocRef, {
        stores: arrayRemove(restaurantName),
      });
      return "Restaurant deleted successfully.";
    } else {
      return "User document does not exist.";
    }
  } catch (error) {
    console.error("Error deleting restaurant from favorites:", error);
    return "Error deleting restaurant.";
  }
}
