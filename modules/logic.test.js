import * as logic from "./logic.js";
import _ from "lodash";

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
        expect(convertToMorse("I love coding 123")).toBe(".. / .-.. --- ...- . / -.-. --- -.. .. -. --. / .---- ..--- ...--")
        expect(convertToMorse("I love coding 123!")).toBe(".. / .-.. --- ...- . / -.-. --- -.. .. -. --. / .---- ..--- ...-- !")
    })
});

describe("swap() tests", () => {
    it("Should have a return", () => {
        expect(swap({name: "Khoa"})).toBeDefined();
    })

    it("Should return a reversed version of the object", () => {
        expect(_.isEqual(swap({"A": ".-"}),{".-": "A"}));
    })

    it("Should only accepts object as parameter", () => {
        expect(swap('name')).toBe(null);
    })
});

describe("convertToEnglish() tests", () => {
    it("Should have a return", () => {
        expect(convertToEnglish("Hello")).toBeDefined();
    });

    it("Should return a correct result", () =>{
        expect(convertToEnglish(".-")).toBe("A");
        expect(convertToEnglish(".... . .-.. .-.. ---")).toBe("HELLO");
        expect(convertToEnglish(".--- --- .... -. / ... -- .. - ....")).toBe("JOHN SMITH");
        expect(convertToEnglish(".. / .-.. --- ...- . / -.-. --- -.. .. -. --.")).toBe("I LOVE CODING")
        expect(convertToEnglish(".. / .-.. --- ...- . / -.-. --- -.. .. -. --. / .---- ..--- ...--")).toBe("I LOVE CODING 123")

    })

    it("Should handle characters beside dashes and dots", () => {
        expect(convertToEnglish("!")).toBe("!");
        expect(convertToEnglish("A!")).toBe("A!");   
    })
});

describe("translate() tests", () => {
    it("Should have a return", () => {
        expect(translate("Hello")).toBeDefined();
    }); 
})