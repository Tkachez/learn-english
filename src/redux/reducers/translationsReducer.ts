import { TranslationsApi } from '../../api'

const SET_TRANSLATION_VISIBLE = 'SET_TRANSLATION_VISIBLE'; 
const SET_TEST_STARTED = 'SET_TEST_STARTED';
const SET_TRANSLATION = 'SET_TRANSLATION';
const SET_LAST_TRANSLATION = 'SET_LAST_TRANSLATION';
const SET_TRANSLATIONS_COUNT = 'SET_TRANSLATIONS_COUNT';

const initialState = {
    translation: null,
    lastTranslation: null,
    translationVisible: false,
    testStarted: false,
};
   
export default (state = initialState, action: any) => {
    switch (action.type) {
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
        default:
            return state;
    }
};

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
   
export const setTranslationsCount = () => {
    return {
        type: SET_TRANSLATIONS_COUNT,
    };
};

export const getTranslation = () => (dispatch, getState) => {
    const { translations: { lastTranslation } } = getState()
    TranslationsApi.getTranslation(lastTranslation || 0)
        .then(response => {
            const translation = response.data()

            dispatch(setLastTranslation(response))
            dispatch(setTranslation(translation))
        })  
}