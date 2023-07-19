import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../../firebaseConfig'
import { 
	addDoc,
	collection,
	startAfter,
	query,
	limit,
	orderBy,
	getFirestore,
	getDocs,
	getCountFromServer 
} from 'firebase/firestore'

import type { Translation } from '../../redux/reducers/translationsReducer'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const TranslationsApi = {
	getTotalTranslations: async () => {
		const requestQuery = query(collection(db, 'translations'))

		const result = await getCountFromServer(requestQuery)
        
		return result.data().count
	},
	addTranslation: async (data: Translation) => {
		addDoc(collection(db, 'translations'), data)
	},
	getTranslation: async (lastDoc = 0) => {
		const requestQuery = await query(collection(db, 'translations'), orderBy('title'), startAfter(lastDoc), limit(1))
        
		return (await getDocs(requestQuery)).docs[0]
	}
}