import React from 'react'
import { 
    Text,
    TextInput,
    Button,
    View
} from 'react-native'

import { styles } from './styles'

import type { HomeComponentProps } from './types'

const HomeComponent = ({ 
    handleTranslationChange,
    handleTitleChange,
    handleNavigate,
    handleItemAdd,
    inputData,
 } : HomeComponentProps) => (
    <View >
        <Button onPress={handleNavigate} title='Go to test'/>
        <View style={styles.wrapper}>
            <Text style={styles.title}>You can add any word or phrase with a translation to test yourself</Text>
            <TextInput 
                style={styles.input} 
                value={inputData.title}
                onChange={handleTitleChange} 
                placeholder="Type a word or a phrase"
            />
            <TextInput 
                style={styles.input}
                value={inputData.translation}
                onChange={handleTranslationChange}
                placeholder="Type its translation"
            />
            <Button onPress={handleItemAdd} title='Submit'/>
        </View>
    </View>
)

export default HomeComponent