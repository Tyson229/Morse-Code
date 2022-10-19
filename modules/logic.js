import morseCode from './data.js'

/** 
 * Convert English into Morse code
 * Ref: https://www.tutorialspoint.com/converting-string-to-morse-code-in-javascript
 */
const convertToMorse = (str) => {
    return str.toUpperCase().split("").map(char => {
        //console.log(char);
        // Uppercase all characters in a string
        // Then split string into single characters
        // Search in the data which morse code is corresponding to this character
        // If found, push that morse code the array
        // If not, push the original character to the array
        // Finally, join the array into a string 
        return morseCode[char] ? morseCode[char] : char; 
    }).join("");
}
export default convertToMorse;

/* Swap key and value of the morseCode object*
 * 
 * @param {*} obj // Morsecode object  
 * @returns // a new Morsecode object with key and value of each entry got swapped
 * Ref: https://stackoverflow.com/questions/23013573/swap-key-with-value-in-object
 */
const swap = (obj) => {
    return Object.keys(obj).reduce((ret,key)=> {
        ret[obj[key]] = key;
        return ret;
    }, {});
}

/** 
 * Convert Morse code into English
 */
const convertToEnglish = (str) => {
    const swappedMorseCode =  swap(morseCode);
    return str.toUpperCase().split(" ").map()
}