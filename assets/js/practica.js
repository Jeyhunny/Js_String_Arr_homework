"use strict"




//practice

// const getBirthdayYear = age => {
//     let date = new Date();

//     let year = date.getFullYear();

// //    let day = date.getMonth() + 1;

//     return year - age;

// }

// console.log(getBirthdayYear(22));


// let date = new Date;

// console.log(typeof date);





// let address = "Ehmedli";


// for (let i = 0; i < address.length; i++) {
//     console.log(address[i]);    
// }



// console.log(address.length);

// console.log(address[0]);

// console.log(address.charAt(0));            

// console.log(address.charCodeAt(0));         

// console.log(address.toLowerCase());         
// console.log(address.toUpperCase());         
// console.log(address.split(""));             

//console.log(address.trim());                 

// console.log(address.trimEnd());                

// console.log(address.trimStart());            


// console.log(address.slice(1,3));



// console.log(address.slice(1));         


// let text = "asfasdfsdfyyyyyyyyyyyyyyyyyyyy"

// if (text.length > 10) {
//     console.log(address.substring(1, 10) + "...");

// }


// console.log(address.substr(1,3));       

// let text = "salam Anar bey Anar";

// console.log(text.replace("Anar", "Mubariz"));

// console.log(text.replaceAll("Anar", "Mubariz"));


// let text1 = "Hello";

// let text2 = " World";

// let res = text1.concat(text2);

// console.log(res);



// const strToUpper = str => {
//     return str.charAt(0).toUpperCase() + str.slice(1)    

// }

// console.log(strToUpper("hello"));



// const strToUpper = str => {
//     return str.charAt(0).toUpperCase().concat(str.slice(1));
// }
// console.log(strToUpper("hello"));



// let text = "salam";

// let result = text[0].toUpperCase();


// let res = text.replace(text.charAt(0), result)
// console.log(res);





// let students = ["Cavid", "Jale", "Roya", "Konul", "Cinare", "Anar"];


// console.log(students.length);  

// console.log(students[students.length-1]);   
// let stu = ["a" , "b" , "c"]

// let result = stu.join("");

// console.log(result);

// let result = students.join();   

// console.log(result);



// console.log(students);

// students.push("Elekber");   

// console.log(students);



// students.pop();          

// console.log(students);



// students.shift();   

// students.unShift();    

// console.log(students);



// let students = ["Cavid", "Jale", "Roya", "Konul", "Cinare", "Anar"];


// let text = "R"

// function filter(arr, text) {
//     let result = [];

//     for (const item of arr) {
//         if(item.toLowerCase().startsWith(text.toLowerCase())){
//             result.push(item)
//         }
//     }

//     return result;
// }

// console.log(filter(students, text));



//console.log(students.indexOf("Jale"));  




// let result = students.find(m => m == "Jale");

// console.log(result);



// students.sort();   

// console.log(students);






// students.reverse();

// console.log(students);

// console.log([3, 8, -10, 23, 19, -4, -14, 27].sort((a,b)=>b-a));

// students.fill("Eli")  //butun elementleri deyiwib eli edir

// students.fill("Eli",0,2)  //2c- indexe qeder deyiwir

// console.log(students);

// console.log(students.every(m => m == "Chinare")); 



// let arr = [10, 20, 30, 40, 5, 6, 7];

// console.log(arr.every(m => m > 4));


// const fruits = ["banana","orange","apple","mango"];
// const f = fruits.entries();

// for (const iterator of f) {
//     console.log(iterator);
    
// }


// let arr = [ 10, 20, 30, 40, 5, 6, 7];


// console.log(arr.findIndex(m=>m>20));  



// console.log(arr.includes(3)); 


// console.log(Array.isArray(arr));   


// let text = "ABCDFE";
// const myArr =  Array.from(text);     
// console.log(myArr);


//console.log(arr.slice(2)); 

//  console.log(arr.slice(2,5)); 




// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // fruits.splice(2, 0, "Lemon", "Kiwi");  

// fruits.splice(2, 1, "Lemon", "Kiwi");   

// console.log(fruits);


// console.log(arr.toString());




// let age = "55";

// let age2 = "33"

// console.log(typeof age.toString());


// console.log(typeof Number(age));


// console.log(Number(age) + Number(age2));


// console.log(typeof parseInt(age));

// function getNums(num1, ...arr) {
//     console.log(arr);
// }

// getNums(1,2,3,4,5,6)


// let test = (...arr) => {
//     console.log(arr);
// }

// test(1,2,3)



// let arr1 = [1,2,3,4,5];


// let copyArr = [...arr1];

// console.log(copyArr);

// arr1[0] = 10;

// console.log(arr1);



// let user1 = {

//     name: "Shaiq",
//     address: "Ehmedli"
// }

// console.log(user1);


// let copyUser1 = {...user1}

// console.log(copyUser1);






















