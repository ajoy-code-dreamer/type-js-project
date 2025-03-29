// ============ typeJs ==========
// ============== multiple line typeJs ==============

// let typing = document.querySelectorAll(".typing");
// let typing_array = Array.from(typing);

// typing_array.map((line) => {
//   let singleLineText = Array.from(line.innerHTML);

//   singleLineText.map((text) => {
//     line.innerHTML = "";
//     let typeStart = 0;

//     function typeJs() {
//       line.innerHTML += text[typeStart];
//       typeStart++;
//       if (typeStart > singleLineText.length) {
//         typeStart = 0;
//         line.innerHTML =""
//       }
//     }
//     let typeInterval = setInterval(() => {
//       typeJs();
//     }, 200);

//   });

// });

// ============== multiple line typeJs ==============

// =========== single line typeJs ============

let typing = document.querySelector(".typing");
let type_array = Array.from(typing.innerHTML)
let typeStart = 0
typing.innerHTML = ""

function typeJs(){
  typing.innerHTML += type_array[typeStart]
  typeStart++
  if( typeStart > type_array.length){
    typing.innerHTML =""
    typeStart = 0
  }
}
let typeInterval = setInterval(()=>{
  typeJs()
},200)

// =========== single line typeJs ============

// ============ typeJs ==========
