import convertToMorse from "./logic.js";

const dom = () => {
    const translateButton = document.getElementById("translate-btn");
    
    const displayOutput = () => {
        const input = document.getElementById("input");
        const output = document.getElementById("output");
        
        output.innerText = convertToMorse(input.value);
    };

    translateButton.addEventListener("click",displayOutput);
}

export default dom;