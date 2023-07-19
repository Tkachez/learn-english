import { useSelector, useDispatch } from 'react-redux';

import type { AnyAction } from "redux";
import type { ThunkDispatch } from "redux-thunk";

import { addTranslation, setInputData } from '../../../redux/reducers/translationsReducer'

import HomeComponent from './HomeComponent';

import type { HomeContainerProps } from './types';

type ActionDispatch = ThunkDispatch<any, any, AnyAction>

const HomeContainer = ({ navigation }: HomeContainerProps) => {
    const dispatch: ActionDispatch = useDispatch();

    const inputData = useSelector((store) => store.translations.inputData)

    const handleNavigate = () => {
        navigation.navigate('Test')
    }

    const handleTitleChange = (event) => {
        const value = event.nativeEvent.text

        dispatch(setInputData({
            ...inputData,
            title: value
        }))
    }

    const handleTranslationChange = (event) => {
        const value = event.nativeEvent.text
        
        dispatch(setInputData({
            ...inputData,
            translation: value
        }))
    }

    const handleItemAdd = () => {
        dispatch(addTranslation())
        dispatch(setInputData({
            title: '',
            translation: ''
        }))
    }

    return (
        <HomeComponent 
            handleTranslationChange={handleTranslationChange}   
            handleTitleChange={handleTitleChange}
            handleItemAdd={handleItemAdd}
            handleNavigate={handleNavigate}
            inputData={inputData}
        />
    )
}

export default HomeContainer