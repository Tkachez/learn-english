import React from "react"
import { View, Button, Text } from "react-native"

import { getTranslation } from "../../../../api"

const TestComponent = () => {
    const [lastDoc, setLastDoc] = React.useState<any>(null)
    const [testStarted, setTestStarted] = React.useState<boolean>(false)
    const [title, setTitle] = React.useState<string>('')
    const [translation, setTranslation] = React.useState<string>('')
    const [testIndex, setTestIndex] = React.useState<number>(1)
    const [translationVisible, setTranslationVisible] = React.useState<boolean>(false)

    const handleStartTest = async () => {
        setTestStarted(true)
        showNextTranslation()
    }

    const showNextTranslation = async () => {
        const result = await getTranslation(lastDoc || 0)
        const {title, translation} = result.data()
        
        setLastDoc(result)
        setTestIndex(testIndex + 1)
        setTitle(title)
        setTranslation(translation)
        setTranslationVisible(false)
    }

    const showTrsndlation = () => {
        setTranslationVisible(true)
    }
    
    return (
        <View style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
            {!testStarted
             ? (<Button onPress={handleStartTest} title="Start test"></Button>)
             : (
                <View style={{display: 'flex', alignItems: 'center'}}>
                    <Text>{title}</Text>
                    {!translationVisible 
                    ? <Button onPress={showTrsndlation} title="Show translation"></Button>
                    : (
                        <View style={{display: 'flex', alignItems: 'center'}}>
                            <Text>{translation}</Text>
                            <Button onPress={showNextTranslation} title="Continue"></Button>
                        </View>
                    )}
                </View>
             )}
        </View>
    )
}

export default TestComponent