export function isPalindrome(word){

    const newWord = word.toLowerCase()
    
    if ((newWord.split('').reverse().join('')) === newWord){
        return true;
    }else if (!/^[A-Za-z]+$/.test(word)){
        throw new Error ("Avoid spaces and special characters");
    }
}
