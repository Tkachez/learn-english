import { View, Text, Button } from 'react-native'

import { styles } from './styles'

import type { TestComponentProps } from './types'

const TestComponent = ({
    testStarted,
    translation,
    handleStartTest,
    translationVisible,
    showNextTranslation,
    handleTranslationVisible,
}: TestComponentProps ) => testStarted && translation
    ? (
        <View style={styles.flexContainer}>
            <Text>{translation.title}</Text>
            {!translationVisible 
                ? <Button onPress={handleTranslationVisible} title="Show translation"></Button>
                : (
                    <View style={styles.flexContainer}>
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