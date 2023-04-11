//Q.1

//Ans.1

// function addNumber(num) {
//     return function(a) {
//       return num + a;
//     }
//   }
  
//   let add = addNumber(5);
  
//   console.log(add(10));
//   console.log(add(20)); 
  

//Q.2

//Ans.2


// function searchArray(myArr, val) {

//     if (arr.length === 0) {
//       return false;
//     }

//     if (arr[0] === val) {
//       return true;
//     }

//     return searchArray(myArr.slice(1), val);
//   }
  
//   let arr = [1, 2, 3, 4, 5];
//   console.log(searchArray(myArr, 3));
//   console.log(searchArray(myArr, 6));


//Q.3

//Ans.3

// function addNewParagraph(text) {
//     const newPTage = document.createElement("p");
//     const textNode = document.createTextNode(text); 
//     newPTage.appendChild(textNode); 
//     document.body.appendChild(newPTage);
//   }

//   addNewParagraph("This is a new P Tage");
  
//Q.4

//Ans.4

// function addListItem(text) {
//     let List = document.getElementById("List");
//     let newListItem = document.createElement("li");
//     let textNode = document.createTextNode(text);
//     newListItem.appendChild(textNode);
//     List.appendChild(newListItem);
//   }

//   addListItem("4");
//   addListItem("5");

//Q.5

//Ans.5

// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }

//Q.6

//Ans.6

// let myObj ={
//     Name:"Anasjahangir",
//     Email:"Anasjahangir.bus@gmail.com"
// }

// function saveObjectToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
//   }

//   saveObjectToLocalStorage(12344,myObj)


//Q.7

//Ans.7

// localStorage.setItem("Key", JSON.stringify(myObj));

// let retanData = saveObjectToLocalStorage("myDataKey",myObj);
// console.log(retanData);

//Q.8

//Ans.8

// const myObj = {
//     name: "Anas",
//     age: 15,
//     hobbies: ["moveis", "gaming", "coding"]
//   };

//    function ObjectToLocalStorage(obj) {
//     for (let key in obj) {
//       const data = obj[key];
//       if (data !== undefined) {
//         localStorage.setItem(key, JSON.stringify(data));
//       }
//     }
//     const newObje = {};
//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);
//       newObje[key] = JSON.parse(localStorage.getItem(key));
//     }
//     return newObje;
//   }

//   let retanObj = ObjectToLocalStorage(myObj);
//   console.log(retanObj);