import { TranslationsApi } from '../../api/translationsApi'

const SET_INPUT_DATA = 'SET_INPUT_DATA'
const SET_ERROR = 'SET_ERROR'; 
const SET_LOADING = 'SET_LOADING'; 
const SET_TRANSLATION_VISIBLE = 'SET_TRANSLATION_VISIBLE'; 
const SET_TOTAL_TRANSLATIONS = 'SET_TOTAL_TRANSLATIONS';
const SET_TEST_STARTED = 'SET_TEST_STARTED';
const SET_TRANSLATION = 'SET_TRANSLATION';
const SET_LAST_TRANSLATION = 'SET_LAST_TRANSLATION';
const SET_TRANSLATIONS_COUNT = 'SET_TRANSLATIONS_COUNT';

export type Translation = {
    title: string;
    translation: string;
}

export type State = {
    error: string;
    loading: boolean;
    inputData: Translation;
    translation: Translation | null,
    totalTranslations: number,
    translationsCount: number,
    lastTranslation: Translation | null
    translationVisible: boolean;
    testStarted: boolean;
}

const initialState: State = {
    error: '',
    loading: false,
    inputData: {
        title: '',
        translation: ''
    },
    translation: null,
    totalTranslations: 0,
    translationsCount: 0,
    lastTranslation: null,
    translationVisible: false,
    testStarted: false,
};
   
export default (state = initialState, action: any) => {
    switch (action.type) {
        case SET_INPUT_DATA:
            return {
                ...state,
                inputData: action.inputData
            }
        case SET_TRANSLATION_VISIBLE:
            return {
                ...state,
                translationVisible: action.translationVisible
            }
        case SET_TEST_STARTED: 
            return {
                ...state,
                testStarted: action.testStarted,
            }
        case SET_LAST_TRANSLATION: 
            return {
                ...state,
                lastTranslation: action.lastTranslation
            }    
        case SET_TOTAL_TRANSLATIONS:
            return {
                ...state,
                totalTranslations: action.totalTranslations
            }    
        case SET_TRANSLATION:
            return {
                ...state,
                translation: action.translation,
            };
        case SET_TRANSLATIONS_COUNT:
            return {
                ...state,
                count: action.payload,
            };  
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case SET_ERROR: 
            return {
                ...state,
                error: action.error
            }    
        default:
            return state;
    }
};

export const setInputData = (inputData: Translation) => ({
    type: SET_INPUT_DATA,
    inputData,
})

export const setLoading = (loading: boolean) => ({
    type: SET_LOADING,
    loading,
})

export const setTotalTranslations = (totalTranslations: number) => ({
    type: SET_TOTAL_TRANSLATIONS,
    totalTranslations,
})

export const setTranslationVisible = (translationVisible: boolean) => ({
    type: SET_TRANSLATION_VISIBLE,
    translationVisible,
})

export const setTestStarted = (testStarted: boolean) => ({
    type: SET_TEST_STARTED,
    testStarted,
})

export const setTranslation = (translation: any) => ({
    type: SET_TRANSLATION,
    translation,
});

export const setLastTranslation = (lastTranslation: any) => ({
    type: SET_LAST_TRANSLATION,
    lastTranslation,
})
   
export const setTranslationsCount = (translationsCount: number) => ({
    type: SET_TRANSLATIONS_COUNT,
    translationsCount,
});

export const setError = (error: string) => ({
    type: SET_ERROR,
    error,
})

export const addTranslation = () => (dispatch, getState) => {
    const { 
        translations: { 
            inputData: {
                title,
                translation
            },
        } 
    } = getState()

    TranslationsApi.addTranslation({title, translation})
}

export const getTotalTranslations = () => (dispatch) => {
    dispatch(setLoading(true))
    
    TranslationsApi.getTotalTranslations()
        .then(response => {
            dispatch(setTotalTranslations(response))
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
}

export const getTranslation = () => (dispatch, getState) => {
    dispatch(setLoading(true))
    const { 
        translations: { 
            lastTranslation,
        } 
    } = getState()

    TranslationsApi.getTranslation(lastTranslation || 0)
        .then(response => {
            const translation = response ? response.data() : response

            dispatch(setLastTranslation(response))
            dispatch(setTranslation(translation))
        }).catch((error) => {
            console.log(error)
        })
        .finally(() => {
            dispatch(setLoading(false))
        })  
}