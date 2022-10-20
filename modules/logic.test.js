import * as logic from "./logic.js";

const {
    convertToMorse,
    swap,
    convertToEnglish,
    translate
} = logic;

describe("convertToMorse() tests", () => {
    it("Should have a return", () => {
        expect(convertToMorse("Hello")).toBeDefined();
    });

    it("Should work with basic inputs", () =>{
        expect(convertToMorse("A")).toBe(".-");
        expect(convertToMorse("hello")).toBe(".... . .-.. .-.. ---");
    })

    it("Should work with strings", () => {
        expect(convertToMorse("John Smith")).toBe(".--- --- .... -. / ... -- .. - ....");
        expect(convertToMorse("I love coding")).toBe(".. / .-.. --- ...- . / -.-. --- -.. .. -. --.")
    })
});
