import type { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

import type { Translation } from "../../../redux/reducers/translationsReducer";

export type HomeContainerProps = {
    navigation: any
}

export type HomeComponentProps = {
    handleTranslationChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    handleTitleChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void,
    handleNavigate: () => void,
    handleItemAdd: () => void,
    inputData: Translation,
}