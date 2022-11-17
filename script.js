'use strict'
let textArea = document.getElementById("comment");
let characterCount = document.getElementById("charCount");
let warning = document.getElementById("warning");
const x = 140;

function myFunction() {
  let name = document.getElementById("name").value;
  let comment = document.getElementById("comment").value;
  let email = document.getElementById("email").value;

  //checks for the valid email
  let regexEmail = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/;


  // Checks Email
  if (name && comment && email.match(regexEmail)) {
    // document.getElementById("comment1").innerHTML = comment;
    // document.getElementById("meta_author").innerHTML = name;

    //create an span element with class
    let commentEle = document.createElement("p");
    commentEle.classlist = "comment1";

    let commentEle2 = document.createTextNode(comment);
    commentEle.appendChild(commentEle2);

    const element = document.getElementById("comment1");
    element.prepend(commentEle2);

    // --------------------
    let nameEle = document.createElement("p");
    nameEle.classList = "meta_author";

    let nameEle2 = document.createTextNode(name);
    nameEle.appendChild(nameEle2);

    const element2 = document.getElementById("meta-author");
    element.prepend(nameEle)



  } else {
    return alertBox();
  }
}



//character limiation & warning color
const countCharacters = () => {
  let numOfEnteredChars = textArea.value.length;
  let count = x - numOfEnteredChars;
  characterCount.textContent = count + "/140";

  if (count < 0) {
    characterCount.style.color = 'red';
    warning.innerHTML = "exceeded the characters limits";
    textArea.style.boxShadow = 'red';
    textArea.styleoutline = '1px solid red';
  }

  else if (count < 25) {
    characterCount.style.color = 'blue';
    warning.innerHTML = " ";
    textArea.style.boxShadow = 'none';
    textArea.styleoutline = '1px solid blue';
  }
  else {
    characterCount.style.color = 'white';
    warning.innerHTML = " ";
    textArea.styleoutline = 'none';
  }
};


textArea.addEventListener("input", countCharacters);

// grab the submit by the id and add eventlistener to for click on the submit button. 
const submit = document.getElementById("submit");
submit.addEventListener("click", myFunction);

// submit returns:
const name2 = document.getElementById("name");
const email2 = document.getElementById("email");

//promote the user to complete the form before when clicking submit.
function alertBox() {
  alert("Please Complete Form");
}

// let checkBoxTwo = function functionTwo() {
//             let nameTyped = document.getElementById('name')
//             let commentTyped = document.getElementById('comment')


//     if (nameTyped.value.length && commentTyped.value.length > 0) {
//         let tag2 = document.createElement("p2");
//         let text2 = document.createTextNode(commentTyped.value);


//         tag2.appendChild(text2);

//         var element = document.getElementById("comment1");

//         element.prepend(tag2);

//         let tag1 = document.createElement("p1");
//         let text1 = document.createTextNode(nameTyped.value);
//         tag1.appendChild(text1);

//         let element = document.getElementById("comment1");
//         element.prepend(tag1);
//     }