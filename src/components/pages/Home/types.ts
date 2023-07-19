import type { ChangeEvent } from "react"

import type { Translation } from "../../../redux/reducers/translationsReducer";

export type HomeContainerProps = {
    navigation: any
}

export type HomeComponentProps = {
    handleTranslationChange: (event: ChangeEvent) => void;
    handleTitleChange: (event: ChangeEvent) => void,
    handleNavigate: () => void,
    handleItemAdd: () => void,
    inputData: Translation,
}