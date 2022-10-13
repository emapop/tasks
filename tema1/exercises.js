/*In script.js am prezentat cunostintele mele despre closure-ul folosit (linia 14, script.js), async await, 
promises si itinerarea unui array, folosirea metodei push() pentru a curata istoricul cautarii */
/*Methods
Exista mai mult tipuri de metode in javascript, cum ar fi string methods object methods, noi insa
ne vom concetra asupra metodelor pe obiecte si asupra metodelor build-in
keyword-ul this in metode se refera la obectul in care e incapsulat, aici fullName este o metoda a obiectului person */

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const name = person.fullName();

//Build-in Methods, aceste metode sunt accesibile din prototipul obiectului de javascript, cum ar fi toUpperCase()
//toLowercase

let message = "Hello world!";
let x = message.toUpperCase();
let y = message.toLocaleLowerCase();

//diferenta var let const, global scope
//variabilele declarate cu var sunt accesibile in global scope, ele pot fi redenumnte oricand
var child = "Denis";
//variabila let este limitata de block scope, let poate fi redenumit dar cu avertizari
let kidName = ["Andrew"];
//variabila const este limitata de block scope si nu poate fi reasignata cu alta valoare
const spouse = "Daniel";

//Exemple

if (child === "Denis") {
  //child va fi afisat deoarece este utilizabi in global scope
  console.log(child);
  // output: Denis

  /*kidName si spouse nu vor fi afisate deoarece sunt block scope, ceea ce inseamna ca daca sunt accesate
    intre {} aceste paranteze va fi afisata o eroare*/
  console.log(kidName, spouse);
}
/*spread operator
Spread oprator-ul (...) in javascript ne permite sa copiem rapid o parte sau tot array-ul ori un obiect
intr-un alt array sau obiect
Exemplul 1
*/

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

//Exemplul 2 cu obiecte
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

//deep copy, este o copie care nu foloseste aceeasi referinta a obiectului, ca in exemplul de mai jos
let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));
ingredients_list_deepcopy[1].list = ["rice flour", "water"];

console.log(ingredients_list[1].list);
// output: [ "eggs", "flour", "water" ]


/*Arrays - accesor, iteration, mutator
 Accesor
În JavaScript, există mai multe metode disponibile care sunt foarte utile pentru a lucra cu arrays,
spre exemplu metoda care modifică array-ul este denumită mutator method.
În timp ce metoda care nu modifică array-ul, ci returnează o nouă reprezentare
a array-ului pe baza array-ului original este denumită accesor method. Cateva din metodele accesor sunt
 concat(), slice(), indexOf(), filter(), si lastIndexOf()*/

 //concat() ne permite sa alaturam doua sau ai multe array-uri

 const Array1 = [ 5,10,15,20,25 ];

const Array2 = [ 30,35,40,45,50 ];

const Resultant_Array = Array1.concat(Array2);

console.log("The resultant array is : ", Resultant_Array);

/*filter() În JavaScript, metoda „filter()” este utilizată pentru a filtra un array
pe baza unei anumite condiții. De exemplu, dorim să filtram numerele pozitive dintr-un array*/
const all_numbers = [5,-10,15,-20,-25,30];
const Positive_only = all_numbers.filter(function(number){
return number >= 0;
});
console.log(Positive_only);

//Iteration

/*forEach() Metoda forEach apelează funcția o data o dată pentru fiecare element de array din ordine. */

index = 0;
array = [ 1, 2, 3, 4, 5, 6 ];
 
array.forEach(myFunction);
function myFunction(item, index)
{
    console.log(item);
}

//map()
/*Metoda map() creează un nou array prin executarea unei funcții pe fiecare element din array.
Metoda map() nu execută funcția pentru elemente din array fără valori.
Metoda map() nu modifică array-ul original. */

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

//Mutator
/* metodele mutator modifica array-ul initial si aduc schimbari in acest array comparativ cu metodele
 accesor care doar aduc o copie a array-ului*/

//pop(), Prima metodă mutator la care ne vom uita este metoda pop(), care elimină ultimul element de la sfârșitul unui array.

let fish = [ "piranha", "barracuda", "koi", "eel" ];
fish.pop();

//metoda shift() elimină primul element de la începutul unui array.

fish.shift();

//push() adaugă un nou element sau elemente la sfârșitul unui array.

fish.push("swordfish");

//Metoda unshift() adaugă un nou element sau elemente la începutul unui array.

fish.unshift("shark");

/*Callbacks
O funcție de callback este o funcție pasată ca argument unei alte funcții care o poate instanța.
Această tehnică de callback permite unei funcții să apeleze o altă funcție
O funcție de callback poate rula după ce o altă funcție și-a încheiat executarea
Exemplu, folosind callback-ul se poate apela o funcție de callback in interiorul funcției myCalculator
iar aceasta funcție sa acceseze callback-ul după ce calculul este terminat */

function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
/* o alta functie de callback este setTimeout care va fi declansata dupa 5000 milisecunde, mai exista si setInterval
care se declaneaza o data la tot 5 secunde*/
myCalculator(5, 5, myDisplayer);

function Person(name) {
  this.name = name;
}
Person.prototype.showName = function() {
  alert(this.name);
}

var mike = new Person("mike"); 

setTimeout(function(){
  mike.showName();
}, 5000);

setInterval(function(){
  mike.showName();
}, 5000);

