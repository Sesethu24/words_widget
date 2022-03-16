 const textInputElem = document.querySelector(".textInput");
 const textInputBtn = document.querySelector(".submitBtn");
 const displayElement = document.querySelector(".result");
 let resultsElem = document.querySelector(".results");
 var sentence = "";
  
 
    function typeSentence(){

    // if (document.querySelector(".textInput").value != null) 
    // {
    //   sentence = document.querySelector(".textInput").value;
    sentence = textInputElem.value;
    // }
    // document.querySelector(".result").innerHTML = sentence;

    
    function highlightWords() {
   
        let message = ''
        const highlight = sentence.split(" ");
        console.log(sentence);
       
        for (let i = 0; i < highlight.length; i++) {
            if (highlight[i].length > 4) {
                
                message += "<mark>" + highlight[i] +"</mark> "
                
            } 
            else {
                
                message += highlight[i] + " ";
            }
        }
        sentence = message;
        console.log({sentence});
    }
    function wordsCounter() {
      
        let counter = sentence.split(" ").length;
        
        return `There are ${counter} words in the sentence`;
    }
    // setTimeout(function(){
    //     displayElement.innerHTML = "";
    //     resultsElem.innerHTML = "";
    // }, 3000);

    return{
        highlightWords,
        wordsCounter
    }
 }
    textInputBtn.addEventListener('click',() => { 
    let instance = typeSentence()
    resultsElem.innerHTML = instance.wordsCounter();
    instance.highlightWords();
    console.log(sentence);
    displayElement.innerHTML = sentence;

});