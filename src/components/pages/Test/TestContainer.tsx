import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ActivityIndicator, View } from 'react-native'

import type { AnyAction } from 'redux'
import type { ThunkDispatch } from 'redux-thunk'

import { 
	getTranslation,
	setTestStarted,
	setTranslation,
	setLastTranslation,
	getTotalTranslations,
	setTranslationVisible,
} from '../../../redux/reducers/translationsReducer'

import TestComponent from './TestComponent'

type ActionDispatch = ThunkDispatch<any, any, AnyAction>

const TestContainer = () => {
	const dispatch: ActionDispatch = useDispatch()

	const translationVisible = useSelector((store) => store.translations.translationVisible)
	const totalTranslations = useSelector((store) => store.translations.totalTranslations)
	const translation = useSelector((store) => store.translations.translation)
	const testStarted = useSelector((store) => store.translations.testStarted)
	const loading = useSelector((store) => store.translations.loading)
    
	const handleStartTest = async () => {
		dispatch(setTestStarted(true))
		dispatch(getTranslation())
	}

	const handleTranslationVisible = () => {
		dispatch(setTranslationVisible(true))
	}

	const showNextTranslation = async () => {
		dispatch(setTranslation(null))
		dispatch(setTranslationVisible(false))
		dispatch(getTranslation())
	}

	React.useEffect(() => {
		dispatch(getTotalTranslations())
	}, [])

	React.useEffect(() => () => {
		dispatch(setTranslation(null))
		dispatch(setLastTranslation(null))
		dispatch(setTestStarted(false))
		dispatch(setTranslationVisible(false))
	}, [])

	return (
		<View style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
			{!loading && !!totalTranslations
				? (
					<TestComponent
						testStarted={testStarted} 
						translation={translation}
						handleStartTest={handleStartTest}
						translationVisible={translationVisible}
						showNextTranslation={showNextTranslation}
						handleTranslationVisible={handleTranslationVisible}
					/>
				)
				: ( <ActivityIndicator  size='large' color='black'/> )}
		</View>
	)
}

export default TestContainer