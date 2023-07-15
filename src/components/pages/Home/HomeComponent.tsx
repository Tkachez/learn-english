import React from 'react'
import { Text, TextInput, StyleSheet, Button, View } from 'react-native'

import { addTranslation } from '../../../../api'

const HomeComponent = ({ navigation }) => {
    const [title, setTitle] = React.useState<string>('')
    const [translation, setTranslation] = React.useState<string>('')

    const handleTitleChange = (event, text: string) => {
        const value = event.nativeEvent.text
        setTitle(value)
    }

    const handleTranslationChange = (event, text: string) => {
        const value = event.nativeEvent.text
        setTranslation(value)
    }

    const handleItemAdd = () => {
        addTranslation({title, translation})
        setTitle('')
        setTranslation('')
    }

    return (
        <View >
            <View>
                <Button onPress={() => navigation.navigate('Test')} title='Go to test'/>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.title}>You can add any word or phrase with a translation to test yourself</Text>
                <TextInput style={styles.input} value={title} onChange={handleTitleChange} placeholder="Type a word or a phrase"/>
                <TextInput style={styles.input} value={translation} onChange={handleTranslationChange} placeholder="Type its translation"/>
                <Button onPress={handleItemAdd} title='Submit'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%', 
        justifyContent: 'center',
        gap: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    title: {
        textAlign: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
}

});

export default HomeComponent