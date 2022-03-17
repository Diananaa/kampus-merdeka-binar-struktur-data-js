export const changeWord = (selectedText: string, changedText: string, text:string): string => {
    return text.replace(selectedText, changedText)
}

/**
 * Usage
 */
// const sentence = "Lorem Ipsum Dolor Sit Amet"
// changeWord("Ipsum", "Diana", sentence)
