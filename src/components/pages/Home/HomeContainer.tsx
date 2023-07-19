import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import type { AnyAction } from 'redux'
import type { ThunkDispatch } from 'redux-thunk'
import type { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

import { addTranslation, setInputData } from '../../../redux/reducers/translationsReducer'

import HomeComponent from './HomeComponent'

import type { HomeContainerProps } from './types'
import type { RootState } from '../../../redux'

type ActionDispatch = ThunkDispatch<RootState, any, AnyAction>

const HomeContainer = ({ navigation }: HomeContainerProps) => {
	const dispatch: ActionDispatch = useDispatch()

	const inputData = useSelector((store: RootState) => store.translations.inputData)

	const handleNavigate = () => {
		navigation.navigate('Test')
	}

	const handleTitleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
		const value = event.nativeEvent.text

		dispatch(setInputData({
			...inputData,
			title: value
		}))
	}

	const handleTranslationChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
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