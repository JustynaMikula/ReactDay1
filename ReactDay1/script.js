import { convertTemp, weather } from "./js/convertTemp.js";
import mojaNazwa from './js/sum.js'
import {data} from './js/data.js'

//destrukturyzacja obiektu
const {firstName, city, veryVeryLongName: val} = data;

//console.log(val)

//destrukturyzacja tablicy
const users = ["Jan","Kasia","John"];

// filter, concat , map, forEach, find

// filter
const nums = [4,6,8,34,21,56,43,23,78,64];
const filteredNums = nums.filter( (x) => x > 50 );

// concat
const a = ["Jan","John"];
const b = ["Anna","Kasia"];
//const concatedUsers = a.concat(b);
const concatedUsers = [...a, ...b, "Justyna"];

// map

const mapNums = nums.map( (num) => num * num );


const createElement = (value) => {
    const card = document.createElement("div");
    card.textContent = value;
    document.body.append(card)
}
// forEach
const test = users.forEach((user)=> createElement(user));
console.log(test);




const users2 = ["Jan","Aleksandra","Ola","John","Zbigniew","Dawid"];

// JS string length
// ZA POMOCĄ METODY FILTER, UTWÓRZ NOWĄ TABLICĘ, KTÓRA ZAWIERA TYLKO OSOBY
// KTÓRYCH IMIĘ MA MNIEJ NIŻ 5 LITER

const strs = ["PRalKA","dOM","rzeSZÓW","WARSZaWa"];
// JS string toLowerCase
// ZA POMOCĄ METODY MAP, UTWÓRZ NOWĄ TABLICĘ, W KTÓREJ WSZYSTKIE WYRAZY
// ZOSTAŁY ZAPISANE Z MAŁEJ LITERY


const passengers = [
    {
        name:"Jan",
        wiek:18
    },
    {
        name:"Dorota",
        wiek:25
    },
    {
        name:"Dawid",
        wiek:12
    }
]
// ZA POMOCĄ METODY FILTER, POZOSTAW W NOWEJ TABLICY TYLKO TE OBIEKTY(!), KTÓRYCH WIEK JEST 
// WIĘKSZY LUB RÓWNY 18













// const arr = new Array(2,3);

// const str = "Jan";
// const newStr = new String("Nowy string");
// console.log(newStr);
// const newNum = new Number(12)

//console.log(arr);

//console.log(users);

// const [first, , third] = users;

// console.log(first);
// console.log(third);




// const temperature = convertTemp(290);

// const result = "Temperatura wynosi " + temperature + ". Jest " + weather

// console.log(result);


// console.log(mojaNazwa(5,5));








// console.log("Test test");


// console.log(jakasNazwa)

// jakasNazwa = "Dawid";

// console.log(jakasNazwa);

// temporal dead zone
//const jakasNazwa = "wartość";
//błąd: jakasNazwa = "Anna";

// let imie = "Jan";
// imie = "John";

// console.log(imie);



