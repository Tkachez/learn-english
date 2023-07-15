import { addDoc, getDoc, collection } from 'firebase/firestore';
import { FIREBASE_DATABASE } from '../firebaseConfig';

export const addTranslation = async (data: any) => {
    addDoc(collection(FIREBASE_DATABASE, 'translations'), data)
};

export const getTranslation = async (id: string) => {
    
}