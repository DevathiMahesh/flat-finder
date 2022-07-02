import { db } from '../firebase.config';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

const FlatCollectionRef = collection(db, 'flats');

class FlatService {
  addFlat = (newFlat) => {
    return addDoc(FlatCollectionRef, newFlat);
  };

  updateFlat = (id, updatedFlat) => {
    const existingFlat = doc(db, 'Flats', id);
    return updateDoc(existingFlat, updatedFlat);
  };

  deleteFlat = (id) => {
    const existingFlat = doc(db, 'Flats', id);
    return deleteDoc(existingFlat);
  };

  getAllFlats = () => getDocs(FlatCollectionRef);

  getFlat = (id) => {
    const existingFlat = doc(db, 'Flats', id);
    getDoc(existingFlat);
  };
}

export default new FlatService();
