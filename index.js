 const textInput = document.querySelector(".submitBtn");
 const displayElement = document.querySelector(".result");
 let resultsElem = document.querySelector(".results");
 var sentence;

    function typeSentence(){

    if (document.querySelector(".textInput").value != null) 
    {
        sentence = document.querySelector(".textInput").value;
    }
    document.querySelector(".result").innerHTML = sentence;

    function highlightWords(textInput) {

        sentence = textInput.split(" ");
        let mySentence = '';
    
        for (let i = 0; i < sentence.length; i++) {
    
            if (sentence[i].length > 4) {
    
                mySentence += `<mark  class="and">${sentence[i]}</mark> `
    
            } else {
                mySentence += sentence[i] + " ";
            }
        }
       displayElement.innerHTML = mySentence;
    }
    function wordsCounter() {
       
        let counter = sentence.split(" ").length;
        
        return `There are ${counter} words in the sentence`;
    }
    setTimeout(function(){
        displayElement.innerHTML = "";
        resultsElem.innerHTML = "";
    }, 3000);

    return{
        highlightWords,
        wordsCounter
    }
 }

 textInput.addEventListener('click',() => { 
    let instance = typeSentence()
    resultsElem.innerHTML = instance.wordsCounter();
    typeSentence();   
    displayElement.innerHTML = instance.highlightWords();

});