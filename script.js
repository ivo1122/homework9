
/*
1. ZADATAK
Koristeci dvije ugnjezdene for petlje napisi funkciju koja kao ulazni parametar prima niz brojeva,
te kao rezultat vraca sortirani niz brojeva od veceg prema manjem.   */

/* let arr = [1, 20, 30, 23, 19, 5, 4, 2, 2, 55, 9, 99 ];

for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++)
        if (arr[i] < arr[j]) {
          let x = arr[i];
          arr[i] = arr[j];
          arr[j] = x;
        }
    }

console.log(arr);
 */


/* 2.ZADATAK 
Napisi funkciju koja ce primiti proizvoljan string kao ulaz. Funkcija ce potom provjeriti jesu li
u tom stringu sve zagrade ispravno napisane. Ukoliko je svaka zagrada zatvorena rezultat funkcije 
ce biti true, ukoliko zagrade nisu ispravno zatvorene rezultat ce biti false.
 */


/* let zagrade = function(brackets) {
    let bracket = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    let stack = [];                     //ovaj zadatak nisam znao rješit pa sam se koristio googleom i youtubeom te naišao na stack(last in first out) i na taj nacin uspio, al rekli smo da je i googlanje vjestina

    for (let char of brackets) {
        if(bracket[char]) {
            stack.push(bracket[char])
        } else{
            if(stack.pop() !==char) return false
        }
    }
    return(heap.length)
};
 */






/* 3. ZADATAK 
Napisi funkciju koja ce primiti niz sljedecih tokena proizvoljnog redoslijeda:
hello_world, winter_assignment, first_week, second_week, success_result, fail_result
a) Funkcija ce svaki token zamijeniti sa sljedecim recenicama i kao rezultat ih spojiti u string:
hello_world - Pozdrav svima, mi smo studenti!
winter_assignment - Za praznike smo dobili domaci.
first_week - Prvi tjedan smo odmarali.
second_week - Drugi tjedan smo radili.
success_result - Svi koji su uspjesno rjesili su odmarali i dalje.
fail_result - Oni koji nisu uspjesno rjesili radili su vise. 
Ako niz sadrzi token koji nije prepoznat, funkcija ce ga zamjeniti sa: 'ERROR: UNDEFINED TOKEN'
b) File ce kao ulazni parametar (process.argv) primati jezik. Ukoliko je jezik en funkcija ce tokene
zamjeniti sa engleskim recenicama. Ukoliko je jezik hr ili bilo koji drugi, funkcija ce tokene zamjeniti 
sa prethodno navedenim hrvatskim recenicama. */


/* function translate(language) {
    const locale = process.argv[2] || "hr";
    const TRANSLATION = {
        en: require("./i18n/en.json"),
        hr: require("./i18n/hr.json"),
    }
    const translation = TRANSLATION[locale] || TRANSLATION.en;
    return translation[language];
}; 


console.log(translate)
console.log(translate("first_week"))
console.log(translate("second_week")) */

//ovaj zadatak nisam znao dalje rješit..a ovo sam uz pomoc videa,samostalno nebi uspio





//4. ZADATAK
/* Istrazi kako se koriste array metode split, join i replace. Koristeci navedene metode, 
te map i filter metode napisi funkciju koja prima string koji se sastoji od vise recenica odvojenih tockom. 
Funkcija radi sljedece: 
a) Svaki razmak izmedu recenica mijenja sa praznim stringom (Npr. 'Hello world' ce biti 'Helloworld)
b) Kreira niz svih recenica koje su u tom nizu (koristi '.' kao oznaku kraja recenice)
c) Sve prazne recenice izbacuje
d) Svaku recenicu mijenja sa sljedecom recenicom: <index>. sentence length is <length>
e) Taj niz recenica spaja u string s '. ' kao razmakom koji vraca kao rezultat funkcije
 */




/* function methods(string) {
    const spaceReplaced = string.replaceAll(/\s/g, "").split(".");                         //u metodi split da smo stavili zarez umisto tocke on bi izbroja sve karaktere u varijabli
    const filtered = spaceReplaced.filter(sentence => sentence.length > 0);
    const map = filtered.map((sentence, index) => `${index} sentence.length is ${sentence.length}!!! `);
    return map.join();
}

const input = " Hello world. Forth task is easy. Give me more. " 

console.log(methods(input))
 */




/* 5. ZADATAK
 Istrazi kako se koristi reduce metoda. Koristeci reduce metodu napisi dvije funkcije:
a) Prva funkcija racuna sumu niza brojeva:
Primjer:
Input: [1,2,3,4]
Output: 10

b) Druga funkcija zbraja sve brojeve vece od 4, a oduzima sve manje
Primjer:
Input: [2,4,10,20]
Output: 24
 */

/* const array = [1, 2, 3, 4];
const initialValue = 0;

 const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  ); 

console.log(sumWithInitial)


let sum = [2, 4, 10, 20];

sum.reduce((acc, element) => {
    return (element > 4) ? acc + element : acc - element;
}, 0);


console.log(sum)
 */


/* 
6. ZADATAK
Istrazi kako se koristi metoda sort. Koristeci tu metodu pomozi Barba Anti da sortira voce
na svom standu na pazaru. Voce je predstavljeno nizom objekata oblika: {name: string, price: number}
Barba Ante zeli prvo staviti najskuplje voce, dakle funkcija mora vracati niz objekata sortiran od veceg
prema manjem.  */


let compare = [{fruit:"banana", price:10}, {fruit:"jabuka", price:5}, {fruit:"avokado", price:15}, {fruit:"naranca", price:3}]

compare.sort((a, b) => b.price - a.price) 


console.log(compare)