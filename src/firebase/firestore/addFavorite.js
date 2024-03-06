import firebase_app from "../config";
import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addFavorite(collection, id, business) {
    let result = null;
    let error = null;

    try {
        // Check if the user document exists
        const userDocRef = doc(db, collection, id);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            // If the user document exists, update the favorite stores array
            await updateDoc(userDocRef, {
                stores: arrayUnion(business)
            });
        } else {
            // If the user document does not exist, create it with the favorite store
            await setDoc(userDocRef, {
                stores: [business]
            });
        }
        result = "Success";
    } catch (e) {
        error = e;
    }

    return { result, error };
}