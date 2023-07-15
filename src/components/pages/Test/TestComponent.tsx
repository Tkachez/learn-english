import React from "react"
import { View, Button, Text } from "react-native"

const TestComponent = () => {
    const [testStarted, setTestStarted] = React.useState<boolean>(false)

    const handleStartTest = () => {
        setTestStarted(true)
    }
    
    return (
        <View style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
            {!testStarted
             ? (<Button onPress={handleStartTest} title="Start test"></Button>)
             : (
                <Text>Test started</Text>
             )}
        </View>
    )
}

export default TestComponent