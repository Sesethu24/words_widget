 const textBtnElem = document.querySelector(".submitBtn");
 const resultElem = document.querySelector(".result");
 var sentence;


 function typeSentence(){
    if (document.querySelector(".textInput").value != null) 
    {
        sentence= document.querySelector(".textInput").value;
    }
    document.querySelector(".result").innerHTML = sentence;

    setTimeout(function(){
        resultElem.innerHTML = "";
    }, 2000);
 }

 textBtnElem.addEventListener('click', typeSentence)