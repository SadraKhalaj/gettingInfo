async function showContect() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  console.log(data);
}

showContect();

// function test(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             const user = {userName : "sadra"}

//             if(user){
//                 resolve(user)
//             }else{
//                 reject(new Error("user not found."))
//             }
//         },3000);
//     })
// }

// test().then((user)=> user.userName).then((userName)=> console.log(userName)).catch((error)=> console.log(error.message)).finally(()=> console.log("finished"))
