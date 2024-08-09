import { isPalindrome } from "../utils";

describe("isPalindrome", ()=> {
    it("returns TRUE for a word that is read the same front and backwards", ()=> {
        const word = "racecar"

        const palindrome = isPalindrome(word)

        expect(palindrome).toBe(true)
    });

    it("returns TRUE for a word that is read the same front and backwards regardless of case", ()=> {
        const word = "raCecAr"

        const palindrome = isPalindrome(word)

        expect(palindrome).toBe(true)
    });

    it("throws an error if non-alphabetic characters are used", ()=> {
        const word = "12345"

        expect(()=> isPalindrome(word).toThrow())
    });

    it("throws an error if empty strings are used", ()=> {
        const word = ""

        expect(()=> isPalindrome(word).toThrow())
    });
});
