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

        //let textInputValue = textInputElem.value;
        const highlight = sentence.split(" ");
       
        for (let i = 0; i < highlight.length; i++) {
            
            if (highlight[i].length > 4) {
               
                sentence += "<mark>" + highlight[i] +"</mark> "
    
            } 
            else {
               
                sentence += highlight[i] + " ";
            }
        }
       
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
    displayElement.innerHTML = sentence;

});