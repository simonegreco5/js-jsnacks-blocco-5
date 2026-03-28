const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]


// creiamo un nuovo array con incremento di 1, utilizzando il metodo .map
const moreNumbers = numbers.map((number)=>{
    return number + 1 
})
console.log(moreNumbers);

// facciamo lo stesso con ciclo for, questa volta ci servirà una variabile d'appoggio
const increseNum = []
for (let i = 0; i < numbers.length; i++){
    increseNum.push(numbers[i] + 1)
}
console.log(increseNum);

// lo stesso con ciclo forEach, sempre con una variabile d'appoggio
const increseNumb = []
numbers.forEach((number)=>{
    increseNumb.push(number + 1)
})
console.log(increseNumb);

