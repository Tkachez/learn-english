import { View, Text, Button } from 'react-native'

const TestComponent = ({
    testStarted,
    translation,
    handleStartTest,
    translationVisible,
    showNextTranslation,
    handleTranslationVisible,
}: any ) => testStarted && translation
    ? (
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
    : (
        (<Button onPress={handleStartTest} title="Start test"></Button>)
    )

export default TestComponent