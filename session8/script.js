// console.log('hello')

// const promise = new Promise((
//     resolve,
//     reject
// )=>{
//     reject("we have error");
// });

// promise.then((data)=>{
//     console.log(data)
// }).catch((error)=>{

//     console.log(error)
// }
// )
// console.log(promise)

const promiseGreeting = new Promise((resolve, reject) => {
  try {
    const greeting = "Hello Rohan !";
    resolve(greeting);
  } catch {
    reject(new Error("Cannot Greet!"));
  }
});

console.log("1. Greetings Start");

promiseGreeting
  .then((greeting) => console.log("t1. ", greeting))
  .catch((err) => console.log("c1. ", err));

console.log("2. Greetings End");

// const btn = document.getElementById("btn");

//  btn.onclick =function(){
//   alert('heheh')
//  }

//  btn.onmouseover = function(){

//     btn.style.backgroundColor = 'red'
//  }
//  btn.addEventListener('click',function(){
//   alert('click')
//  })

// const counter = document.getElementById("counter");

// const inc1btn = document.getElementById("inc-btn");
// const dec1btn = document.getElementById("dec-btn");

// function changeCounter(event){

//   if(event.target.id=='inc-btn'){
//        increment();
    
//     }else if (event.target.id=='dec-btn'){
      
//         decrement();
//   }
// }



// inc1btn.addEventListener ('click',function (event) {

//   changeCounter(event)
 
 
// });

// dec1btn.onclick = function (event) {
//   changeCounter(event)
  
// };
// let count = 0;


// function increment() {
 
  
//     counter.innerText = ++count;
  
// }

// function decrement() {
 
//   counter.innerText = --count;
 
// }

const emailInput = document.getElementById('email-input');
let input =''
// emailInput.addEventListener('input',function(event){
//   console.log(event)
//  console.log(event.data);

//  if(event.inputType==='insertText'){
//      input = input +event.data
//      console.log(input)
//  }else if (event.inputType==='deleteContentBackward'){
        
//        input = input.substring(0,input.length-1)
//        console.log(input)
//  }

// }
// )

let user ={}

emailInput.addEventListener('change',function(event){
  console.log(event)
  console.log(event.target.name)
  user[event.target.name]=event.target.value
  input = event.target.value
  console.log(user)
})


document.getElementById('btn').onclick= function(){
  document.getElementById('heading').innerText =input
}

// selscion and deleting delete other , therefor input is tedious event .so we have change event 