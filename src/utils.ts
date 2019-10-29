
/**
 * Check if the word has any capital letters
 * @param word word to check 
 * TODO: write unit tests for this func
 */
export const hasCapitalLetters = (word: string): boolean => {
    return word
        // trim all the space
        .replace(/\s*/g, '')
        // convert to an array
        .split('')
        // compare each letter
        .some(letter => letter === letter.toUpperCase());
};