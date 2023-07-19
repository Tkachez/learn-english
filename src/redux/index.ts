import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import TranslationsReducer from './reducers/translationsReducer'
 
const rootReducer = combineReducers({
	translations: TranslationsReducer,
})

export type RootState = ReturnType<typeof store.getState>
 
export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))