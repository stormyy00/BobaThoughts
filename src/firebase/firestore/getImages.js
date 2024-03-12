import firebase_app from "../config";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getImages() {
  try {
    const imagesCollectionRef = collection(db, "images");
    const imagesQuery = query(imagesCollectionRef);

    const imagesSnapshot = await getDocs(imagesQuery);
    const images = [];

    imagesSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.url && data.name && data.link) {
        images.push({
          url: data.url,
          name: data.name,
          link: data.link,
        });
      }
    });

    return images;
  } catch (error) {
    console.error("Error fetching images:", error);
    return []; // Return an empty array in case of an error
  }
}
