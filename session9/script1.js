// //Event Listener on GrandParent
// document.getElementById("grandparent").addEventListener("click", () => {
//     console.log("Grandparent Clicked");
//   });
  
//   //Event Listener on Parent
//   document.getElementById("parent").addEventListener("click", () => {
//     console.log("Parent Clicked");
//   });
  
//   //NO Event Listener on Child!
//   document.getElementById("btn").addEventListener("click", (event) => {
//     console.log("child Clicked");
//     event.stopImmediatePropagation();
//   });

const target = document.getElementById('colors');


console.log(target)

function changeColor(event){
   console.log(event.target.dataset)
    document.getElementById('selected').innerText= `Selected Color: ${event.target.dataset.color}`
    let bg = document.getElementById('selected').style.backgroundColor =event.target.dataset.color
}

target.addEventListener('click',function(event){
    changeColor(event)
    
})

// console.log(target.style.backgroundColor='red')

