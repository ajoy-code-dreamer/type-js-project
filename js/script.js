// ============ typeJs ==========
// ============== multiple line typeJs ==============

let typing = document.querySelectorAll(".typing");
let typing_array = Array.from(typing);


typing_array.map((item) => {
  let singleLineText = Array.from(item.innerHTML);
  item.innerHTML = ""
  let typeStart = 0
  console.log(item)

  function typeJs() {
    item.innerHTML += singleLineText[typeStart];
    typeStart++;
    if (typeStart > singleLineText.length) {
      item.innerHTML =""
      typeStart = 0;
    }
  }
  let typeInterval = setInterval(() => {
    typeJs();
  }, 200);


});

// ============== multiple line typeJs ==============

// =========== single line typeJs ============

// let typing = document.querySelector(".typing");
// let type_array = Array.from(typing.innerHTML)
// let typeStart = 0
// typing.innerHTML = ""

// function typeJs(){
//   typing.innerHTML += type_array[typeStart]
//   typeStart++
//   if( typeStart > type_array.length){
//     typing.innerHTML =""
//     typeStart = 0
//   }
// }
// let typeInterval = setInterval(()=>{
//   typeJs()
// },200)

// =========== single line typeJs ============

// ============ typeJs ==========
