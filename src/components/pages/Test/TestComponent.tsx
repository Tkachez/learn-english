import * as React from "react"
import { useSelector, useDispatch } from 'react-redux';
import { 
    ActivityIndicator,
    View,
    Button,
    Text
} from "react-native"

import { 
    getTranslation,
    setTestStarted,
    setTranslation,
    setLastTranslation,
    setTranslationVisible,
} from '../../../redux/reducers/translationsReducer'

const TestComponent = () => {
    const dispatch = useDispatch();

    const translationVisible = useSelector((store) => store.translations.translationVisible)
    const translation = useSelector((store) => store.translations.translation)
    const testStarted = useSelector((store) => store.translations.testStarted)
    
    const handleStartTest = async () => {
        dispatch(setTestStarted(true));
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

    React.useEffect(() => () => {
        dispatch(setTranslation(null))
        dispatch(setLastTranslation(null))
        dispatch(setTestStarted(false));
        dispatch(setTranslationVisible(false))
    }, [])

    return (
        <View style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
            {!testStarted
             ? (<Button onPress={handleStartTest} title="Start test"></Button>)
             : translation 
                ? (
                    (
                        <View style={{display: 'flex', alignItems: 'center'}}>
                            <Text>{translation.title}</Text>
                            {!translationVisible 
                                ? <Button onPress={handleTranslationVisible} title="Show translation"></Button>
                                : (
                                    <View style={{display: 'flex', alignItems: 'center'}}>
                                        <Text>{translation.translation}</Text>
                                        <Button onPress={showNextTranslation} title="Continue"></Button>
                                    </View>
                            )}
                        </View>
                     )
                )
                : ( <ActivityIndicator  size='large' color='black'/> )}
        </View>
    )
}

export default TestComponent