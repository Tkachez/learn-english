import React from 'react'
import { Text, TextInput, StyleSheet, Button, View } from 'react-native'

const HomeComponent = ({ 
    handleTranslationChange,
    handleTitleChange,
    handleNavigate,
    handleItemAdd,
    inputData,
 } : any) => (
    <View >
        <Button onPress={handleNavigate} title='Go to test'/>
        <View style={styles.wrapper}>
            <Text style={styles.title}>You can add any word or phrase with a translation to test yourself</Text>
            <TextInput style={styles.input} value={inputData.title} onChange={handleTitleChange} placeholder="Type a word or a phrase"/>
            <TextInput style={styles.input} value={inputData.translation} onChange={handleTranslationChange} placeholder="Type its translation"/>
            <Button onPress={handleItemAdd} title='Submit'/>
        </View>
    </View>
)

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