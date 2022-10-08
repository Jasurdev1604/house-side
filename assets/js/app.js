
/* 
Homework js bitta funksiya kere unga number beraman u manga usha sonni
teskarimachasiga qaytarishi kere number type da MASALAN 678543 kirgazsam
manga 345876 sonini number typeda qaytarishi kere
*/
 
let myNum = () => {
    let a = prompt("Son Kiriting: ");
    let b = "";
    for (let i = 0; i < a.length; i++) {
        b = a[i] + b;
        b = +b;
    }
    console.log(b , typeof(b));
}

/*
bitta funksiya kere unga bitta string bn bitta xarf kirgazsam 
manga usha kirgazgan sozimmi ichida usha xarfdan nechta borligini 
etishi kere MASALAN WiFi bn i xarfini kirgazadigan bosa 2 qaytarishi 
kere chunki WiFi ichida i xarfidan 2ta bor yoki Soyabon bn y xarfini kirgazadigan 
bosam manga 1yaytarishi kere chunki soyabon ichida 1ta y bor
*/
function myFunction() {
    let word = prompt("Soz kriting: ");
    let letter = prompt("Harf kriting: ");
    let n = 0
        for (let j = 0; j < word.length; j++) {
           if ( word[j] == letter) n++;
        }
    console.log(`${word} so'zida ${letter} harfi ${n} marta qatnashgan!`);
} 

let son = function(x) {
    let s = 0;
    for (let i = 0; i < x.length; i++) {
        s = s + x[i];
    }
    console.log(s);
}