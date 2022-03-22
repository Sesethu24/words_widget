 const textInputElem = document.querySelector(".textInput");
 const textInputBtn = document.querySelector(".submitBtn");
 const displayElement = document.querySelector(".result");
 const checkbox = document.querySelector(".checkbox");
 const checkboxDisplay = document.querySelector(".result");
 const longestWordElem = document.querySelector(".long");
 let resultsElem = document.querySelector(".results");
 var sentence = "";
  
    function typeSentence(){

      sentence = textInputElem.value;
    
    function highlightWords() {
   
        let message = ''
        const highlight = sentence.split(" ");
       
       for (let i = 0; i < highlight.length; i++) {
            if (highlight[i].length > 4) {
                
             message += "<mark>" + highlight[i] +"</mark> "
            } 
            else {
                message += highlight[i] + " ";
            }
        }
        sentence = message;
    }
    function wordsCounter() {
      
        let counter = sentence.split(" ").length;
        
        return `The sentence contains ${counter} words`;
    }
    // setTimeout(function(){
    //     displayElement.innerHTML = "";
    //     resultsElem.innerHTML = "";
    // }, 5000);

    return{
        highlightWords,
        wordsCounter,
       }
 }
    textInputBtn.addEventListener('click',() => { 
    let instance = typeSentence()
    resultsElem.innerHTML = instance.wordsCounter();
    instance.highlightWords();
    displayElement.innerHTML = sentence;
   
});
function hideSomeWords() {
    const highlight = sentence.split(" ");
    let message = '';
    if(checkbox.checked) {
        for (let i = 0; i < highlight.length; i++) {
            if ((checkbox.checked == true) && (highlight[i].length >= 5)) {
            
                message += "<mark>" + highlight[i] +"</mark> "
            } 
            else {
                message += " ";
            }
        }
    } else
    {
        message = sentence
    }
    checkboxDisplay.innerHTML = message;
}
 function longestWord() {
   
    const long = sentence.split(" ");
    let message = '';
    let longest = [0];
    for (let i = 0; i < long.length; i++) {
        if ((checkbox.checked == true) && (longest.length < long[i].length)) {
            longest = long[i];
            message += `<mark> ${longest} </mark> `;
          
        } else {
            message += " ";
        }
        message = sentence;
    }
    longestWordElem.innerHTML = `The longest word in the sentence is <mark  class="and"> ${longest} </mark>`;

}

    checkbox.addEventListener('click', function () {
       hideSomeWords();
       longestWord();
    
})