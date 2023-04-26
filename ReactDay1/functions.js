
function zwyklaFunkcja () {
    return "Wartość zwrócona z funkcji"
}

// const wynikFunkcji = zwyklaFunkcja();

// console.log(wynikFunkcji);
// console.log(zwyklaFunkcja());

function dodaj (a,b) {
    return a + b;
}

// console.log(dodaj(5,7));
// console.log(dodaj(3,1));

const funkcjaPrzypisana = function () {
    return "wywołanie"
}

//console.log(funkcjaPrzypisana())

const funkcjaStrzalkowa = (x) => {
    return x*x
}

//const wynikFn = funkcjaStrzalkowa(5);

const krotkaStrzalka = (x,y) => x / y;

//console.log(krotkaStrzalka(20,4))

// ... spread operator
const strzalkowa1 = (...args) => {
    return args.reduce((acc,val) => acc += val)
}

console.log(strzalkowa1(1,4,5,6));
