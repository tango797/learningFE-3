// function describe() {
//   const promise = fetch("https://api.kanye.rest")
//  return  promise.then((res)=>{
//         return res.json();
//   }).catch((error)=>{

//     console.log(error);
//   })

// }
// describe()
//   .then((data) => {
//     if (data && data.quote) {
//       document.getElementById("quote").innerText = data.quote;
//     } else {
//       console.log("Data or quote property is missing or undefined.");
//     }
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
// function makeLi(id, content) {
//   const getUl = document.getElementById("users");

//   const makeLi = document.createElement("li");
//   makeLi.id = id;
//   makeLi.innerText = content;

//   getUl.appendChild(makeLi);

//   return makeLi;
// }

function fetchUsers() {
  return fetch("https://api.github.com/users")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

// function addUsersToDOM(){
//     fetchUsers().then((data)=>{

//         data.forEach(user => {
          
//             const getUser = makeLi(user.id,user.login)
//             document.getElementById('users').appendChild(getUser);
//         });
//     }).catch(()=>{

//     })

// }
// addUsersToDOM();

async function fetchUsers(){

      const promise = await fetch("https://api.github.com/users")
     const res = await promise.json();
     console.log(res);
}
fetchUsers()
