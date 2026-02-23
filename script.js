// // // const button=document.querySelector('.btn')

// // // button.classlist.add('blue')

// // // function message(){
// // //     alert('Button clicked!')
// // // }
// // // button.addEventListener('click',message)
// // // button.removeEventListener('click',message)

// // // const button=document.querySelector('#btn')
// // // const button2=document.querySelector('#stop')
// // // button2.addEventListener('click',function(){
// // //button.removeEventListener('click',message)
// // // })


// // // const btn=document.querySelector("#btn")
// // // btn.addEventListener('keydown',function(event){
// // //     console.log(event.key)
// // // })

// // // btn.addEventListener('keyup',function(event){
// // //     console.log(event.key)
// // // })

// // // const handleSubmit=(event)=>(
// // //     event.preventDefault()
// // //     console.log("form submitted")
// // // )

// // // const form=document.querySelector("form")
// // // form.addEventListener("submit",handleSubmit())

// // // const btn=document.querySelector("button")
// // // const div=document.querySelector(".container")

// // // btn.addEventListener("click",function(){console.log("button")})
// // // div.addEventListener("click",function(){console.log("Div")})
// // // div2.addEventListener("click",function(){console.log("Div2")})

// // // debugger
// // // var a= 78
// // // let b= 345


// // // console.log(a)
// // // console.log(b)


// // // function print(){
// // //     let c=45
// // //     console.log(c)
// // //     console.log("Inside Function")
// // // }

// // // print()

// // // let total = 100;
// // // function calculate(){
// // //     console.log(total)
// // //     let total= 100;
// // // }
// // // calculate()

// // // console.log(("First Line")
// // // setTimeout()=>{
// // //     console.log("After 2 Second")
// // // },2000)

// // // console.log("Second Line")


// // // setTimeout((){
// // //     alert("After 9 sec")
// // // }, 9*1000)

// // // setTimeout(()=>
// // // {
// // //     clearInterval(timerId)
// // // },10*1000)

// // // let num = 1;

// // // function printNumber() {
// // //     console.log(num);

// // //     if (num < 10) {
// // //         num++;
// // //         setTimeout(printNumber, 2*1000);
// // //     }
// // // }

// // // printNumber();
// // // function print(){
// // //     console.log("Hello Students")
// // // }

// // // function greet(num){   //Higher Order Function
// // //     console.log("Welcome to my class")
// // //     setTimeout(()=>{
// // //         console.log("INSIDE SET TIMEOUT")
// // //         let firstname="alexa"
// // //         num(firstname)
// // //     },2000);
// // //     }

// // // greet(print)


// // // console. log("Starting homework ... ");

// // // setTimeout(( ) => {
// // // console.log("Homework done!");
// // // console.log("Starting dinner ... ");

// // // setTimeout ( ( ) = {
// // // console.log( "Dinner done!");
// // // consolole.log("Getting ready to go out ... ");

// // // setTimeout(() =>\{
// // // console.log( "Going to the playground!" );
// // // }, 1000); "after Winner"

// // // }, 1500); "dinner time"

// // // }, 2000); "homework time"



// // // function finishHomework(callback) {
// // // console.log("Starting homework ... ");
// // // setTimeout(() => {
// // // console. log("Homework done!");
// // // callback();
// // // }, 2000);
// // // }

// // // function eatDinner(callback) {
// // // console. log("Starting dinner ... ");
// // // setTimeout(() =>{
// // // console. log("Dinner done!");
// // // callback();
// // // }, 1500);
// // // }
// // // function goToPlayground( ) {
// // // console. log("Going to the playground!");
// // // }
// // // // Chained in steps, but cleaner
// // // finishHomework(() => {
// // // eatDinner(() => {
// // // goToPlayground( );

// // // });
// // // });

// // // const input=document.querySelector("#task")
// // // const btn=document.querySelector(".btn")
// // // const lists=document.querySelector(".list")

// // // btn.addEventListener("click",(e)=>{
// // //     e.preventDefault()
// // //     if(input.value===""){
// // //         alert("Add the Task")
// // //         return
// // //     }

// // //     const li=document.createElement("li")
// // //     const deleteButton=document.createElement("button")

// // //     deleteButton.innerText="Delete"
// // //     li.innerText=input.value

// // //     li.appendChild(deleteButton)
// // //     lists.appendChild(li)

// // //     deleteButton.addEventListener("click",()=>{
// // //         lists.removeChild(li)
// // //     })
// // //     input.value=""
// // // })


// // // const p = new Promise(function (resolve, reject) {
// // //     setTimeout(() => {
// // //         let done = true;
// // //         if (done) {
// // //             resolve({ name: "alex", age: 34 })
// // //         } else {
// // //             reject("network issue")
// // //         }
// // //     }, 5000)
// // //     //console.log(P)
// // // })
// // // p.then((data) => {
// // //     console.log("Resolved", data)
// // // }).catch((err) => {
// // //     console.log("Rejected", err)
// // // }).finally(() => {
// // //     console.log("Finally Block")
// // // })

// // // function doHomework() {
// // //     return new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             let done = true;
// // //             if (done) {
// // //                 resolve("Homework Done")
// // //             } else {
// // //                 reject("Homework Not Done")
// // //             }
// // //         }, 2000);
// // //     });
// // // }
// // // function eatDinner() {
// // //     return new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             let done = true;
// // //             if (done) {
// // //                 resolve("Dinner Done")
// // //             } else {
// // //                 reject("Dinner Not Done")
// // //             }
// // //         }, 1500);
// // //     });
// // // }
// // // function goToPlayground() {
// // //     return new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             let done = true;
// // //             if (done) {
// // //                 resolve("Going to Playground")
// // //             } else {
// // //                 reject("Not going to Playground")
// // //             }
// // //         }, 1000);
// // //     });
// // // }
// // // doHomework().then((message) => {
// // //     console.log(message)
// // //     return eatDinner()
// // // }).then((message) => {
// // //     console.log(message)
// // //     return goToPlayground()
// // // }).then((message) => {
// // //     console.log(message)
// // // }).catch((err) => {
// // //     console.log(err)
// // // }).finally(() => {
// // //     console.log("All Tasks Completed")
// // // })



// // // console .log("first line")
// // // setTimeout(() => {
// // //     console.log("inside set timeout")
// // //     }, 0);
// // //     const p=new Promise((resolve,reject)=>{
// // //         resolve()
// // //     })
// // //     p.then(()=>{
// // //         console.log("inside promise")
// // //     }).catch(()=>{
// // //         console.log("inside catch")
// // //     })
// // //     const p2=new Promise((resolve,reject)=>{
// // //         resolve()
// // //     })
// // //     p2.then(()=>{
// // //         console.log("inside promise")
// // //     }).catch(()=>{
// // //         console.log("inside catch")
// // //     })
// // //     const p3=new Promise((resolve,reject)=>{
// // //         resolve()
// // //     })
// // //     p3.then(()=>{
// // //         console.log("inside promise")
// // //     }).catch(()=>{
// // //         console.log("inside catch")
// // //     })


// async function senddata (){
  //     try{
 //         const response= await fetch('https://dummyjson.com/products/add',{
 //             method:'POST',
 //             headers:{'content-type':'application/json'},
 //             body:JSON.stringify({
 //                 title:"mackbook ",
 //                 description:"Mackbook pro",
 //                 price :10000,
 //                 discountPercentage:5,
 //                 rating:4.5,
 //                 stock:5,
 //                 brand:"apple",
 //             })
 //         })

 //         const data=await response.json()
 //         console.log(data)
 //     }catch(err){
 //         console.log("data not found")
 //     }

 // }
 // senddata()



// let obj={
//     title:"mackbook",
//     description:"Mackbook pro",
// }

// localStorage.setItem("obj",JSON.stringify(obj))
// localStorage.setItem("name","devendar")
// localStorage.setItem("age",34)
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))
// console.log(JSON.parse(localStorage.getItem("obj")))


// localStorage.removeItem("age")

// localStorage.clear()

//  sessionStorage.setItem("obj",JSON.stringify(obj))
//  sessionStorage.setItem("name","devendar")
//  sessionStorage.setItem("age",34)
//  console.log(sessionStorage.getItem("name"))
//  console.log(sessionStorage.getItem("age"))
//  console.log(JSON.parse(sessionStorage.getItem("obj")))
//  sessionStorage.removeItem("age")


// document.cookie="name=devendar; expires=sat, 21 feb 2026 12:00:00 UTC"
// document.cookie="age=34; expires=sat, 21 feb 2026 12:00:00 UTC"


// console.log(document.cookie)


// async function sample(){
//     await fetch("http://127.0.0.1:5500/index.html")
// }
// sample()


// function* generate(){
//     yield 1
//     yield 2
//     yield 3
//     for(let index=1;index<=4;index++){
//     yield index
// }
// let i=1
// while(true){
//   yield i
//   i++
//        }

// }


// const gen=generate()

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// function add(a,b,c ) {
//     return a+b+c
// }

// function add(a){
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   }
// }
//  console.log(add(1)(2)(3))  
//  const first=add(1)
//   const second=first(2)
//   const third=second(3)
//   console.log(third)
//   console.log(third)

  

