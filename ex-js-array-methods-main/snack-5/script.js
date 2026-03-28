const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// salviamo in un nuovo array i numeri pari utilizzando il metodo .filter
const numPari = nums.filter((number)=>{
    return number % 2 === 0

    // oppure
    // if (number % 2 === 0){
    //     return true
    // }
    // return false

})
console.log(numPari);

// facciamo lo stesso utilizzando il metodo forEach, servendoci di una varibile d'appoggio
const numbPari = []
nums.forEach((number)=>{
    
    if (number % 2 === 0){
        numbPari.push(number)
    }
})
console.log(numbPari);

// facciamo lo stesso con il ciclo for classico
const numberPari =[]
for (let i = 0; i < nums.length; i++){
    
    if (nums[i] % 2 === 0){
        numberPari.push(nums[i])
    }
}
console.log(numberPari)





