import { db } from "../firebase.config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const FlatCollectionRef = collection(db, "flats");

class FlatService {
  addFlat = (newFlat) => {
    return addDoc(FlatCollectionRef, newFlat);
  };

  updateFlat = (id, updatedFlat) => {
    const existingFlat = doc(db, "Flats", id);
    return updateDoc(existingFlat, updatedFlat);
  };

  deleteFlat = (id) => {
    const existingFlat = doc(db, "Flats", id);
    return deleteDoc(existingFlat);
  };

  getAllFlats = () => getDocs(FlatCollectionRef);

  getFlat = (id) => {
    const existingFlat = doc(db, "Flats", id);
    getDoc(existingFlat);
  };

  getFlatsOnSearch = (city, area) => {
    const q = query(
      FlatCollectionRef,
      where("city", "==", city),
      where("area", "==", area)
    );
    return getDocs(q);
  };
}

export default new FlatService();
