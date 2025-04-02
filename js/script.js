// ============ typeJs ==========
// ============== multiple line typeJs ==============

// let typing = document.querySelectorAll(".typing");
// let typing_array = Array.from(typing);

// typing_array.map((item) => {
//   let singleLineText = Array.from(item.innerHTML);
//   item.innerHTML = ""
//   let typeStart = 0

//   function typeJs() {
//     item.innerHTML += singleLineText[typeStart];
//     typeStart++;
//     if (typeStart > singleLineText.length) {
//       item.innerHTML =""
//       typeStart = 0;
//     }
//   }
//   let typeInterval = setInterval(() => {
//     typeJs();
//   }, 200);

// });

// ============== multiple line typeJs ==============

// =========== single line typeJs ============

let typing = document.querySelector(".typing");
let typing_text = typing.innerHTML;
let text_arr = typing_text.split("");
let typeStart = 0;
typing.innerHTML = "";

function typeJs() {
  if (typeStart < text_arr.length) {
    typing.innerHTML += typing_text[typeStart];
    typeStart++;
  } else {
    typing.innerHTML = "";
    text_arr.pop();
    typing.innerHTML += text_arr.join("");

    if (text_arr.length == 0) {
      text_arr = typing_text.split("");
      typeStart = 0;
    }
  }
}

let typeInterval = setInterval(() => {
  typeJs();
}, 200);

// =========== single line typeJs ============

// ============ typeJs ==========
