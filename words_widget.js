function getSentence() {
   var sentenceList = []

   let get = text => {
        let word = text;
        return word;
    }
    const setSentence = sentence => {
        if (sentence) {
            sentenceList.push(sentence);
        }
    }
    function wordsCounter(sentence) {

        let counter = sentence.split(" ").length;

        return `The sentence contains ${counter} words`;
    }
    function highlightWords() {

        let message = ''
        const highlight = sentence.split(" ");

        for (let i = 0; i < highlight.length; i++) {
            if (highlight[i].length > 4) {

                message += `<mark> ${highlight[i]}  </mark> `
            } else {
                message += highlight[i] + " ";
            }
        }
        sentence = message;
    }
    function longestWord() {

        const long = sentence.split(" ");
        let message = '';
        let longest = [0];
        for (let i = 0; i < long.length; i++) {
            if (longest.length < long[i].length){
                longest = long[i];
                message += `<mark style="background-color: blue;"> ${longest} </mark> `;
   
            } else {
                message += long + " ";
            }
            
        }
        message = sentence;
        //return message
        longestWordElem.innerHTML = `The longest word in the sentence is <mark style="background-color: blue;"> ${longest} </mark>`;
    }
    

    return {
        highlightWords,
        wordsCounter,
        get,
        setSentence,
        longestWord
    }
}