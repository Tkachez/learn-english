import type { Translation } from "src/redux/reducers/translationsReducer";

export type TestComponentProps = {
    testStarted: boolean;
    translation: Translation,
    handleStartTest: () => void,
    translationVisible: boolean,
    showNextTranslation: () => void,
    handleTranslationVisible: () => void,
}