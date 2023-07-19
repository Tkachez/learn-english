import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";
import { addDoc, collection, startAfter, query, limit, orderBy, getFirestore, getDocs } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const TranslationsApi = {
    addTranslation: async (data: any) => {
        addDoc(collection(db, 'translations'), data)
    },
    getTranslation: async (lastDoc = 0) => {
        const requestQuery = await query(collection(db, 'translations'), orderBy('title'), startAfter(lastDoc), limit(1))
        
        return (await getDocs(requestQuery)).docs[0];
    }
}