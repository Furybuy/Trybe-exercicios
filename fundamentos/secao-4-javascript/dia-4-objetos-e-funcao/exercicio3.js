let reverseWord = '';

function verificaPalindrome (word) {
    for (let i = 0; i < word.length; i+=1){
        reverseWord += word[word.length - 1 - i];
    }

    //let reverse = word.split('').reverse().join(''); também reverte a palavra

    if (word == reverseWord){
        return true;
    }
    else{
        return false;
    }
}

console.log(verificaPalindrome('tarara'));