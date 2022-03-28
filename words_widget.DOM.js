 const textInputElem = document.querySelector(".textInput");
 const textInputBtn = document.querySelector(".submitBtn");
 const displayElement = document.querySelector(".result");
 const checkbox = document.querySelector(".checkbox");
 const checkboxDisplay = document.querySelector(".result");
 const longestWordElem = document.querySelector(".long");
 const keepTrackElem = document.querySelector(".trackBtn");
 let resultsElem = document.querySelector(".results");

 var instance = getSentence();

 textInputBtn.addEventListener('click', () => {
     sentence = textInputElem.value;
     instance.setSentence(sentence)
     if (sentence != '') {
         displayElement.innerHTML = instance.get(sentence)
     }
     resultsElem.innerHTML = instance.wordsCounter(sentence);
     instance.highlightWords();


 });

 function hideSomeWords() {
     const highlight = sentence.split(" ");
     let message = '';
     if (checkbox.checked) {
         for (let i = 0; i < highlight.length; i++) {
             if ((checkbox.checked == true) && (highlight[i].length >= 5)) {

                 message += "<mark>" + highlight[i] + "</mark> "
             } else {
                 message += " ";
             }
         }
     } else {
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
     longestWordElem.innerHTML = `The longest word in the sentence is <mark> ${longest} </mark>`;
 }

 checkbox.addEventListener('click', function () {
     hideSomeWords();
     longestWord();

 });

//  function keepingTrack(){
 
//     myList.innerHTML = ''
//     const keepSentence = textInputElem.value;

//     if (localStorage.getItem("sentence") === null) {

//         sentenceList.push(keepSentence);
//         localStorage.setItem("sentence", JSON.stringify(sentenceList));
//     }
//     else {
//         sentenceList = JSON.parse(localStorage.getItem("sentence"))
//     }

//     for (let i = 0; i < sentenceList.length; i++) {
//         const element = sentenceList[i];

//         var enteredSentence = document.createElement('li');
//         enteredSentence.appendChild(document.createTextNode(element));
//         myList.appendChild(enteredSentence);

//     }
//  }
// keepTrackElem.addEventListener('click', keepingTrack)
