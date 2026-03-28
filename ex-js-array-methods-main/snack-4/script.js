const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

// stampiamo con il metodo .map
const autori = posts.map((name)=>{
  return name.author
})
console.log(autori);

// stampiamo con il ciclo forEach, servendoci di una variabile d'appoggio 
const scrittori = []
posts.forEach((name)=>{
  scrittori.push(name.author)
})
console.log(scrittori);

// facciamo lo stesso utilizzando un classico ciclo for, sempre con variabile d'appoggio 
const ideatori = []
for (let i = 0; i < posts.length; i++){
  ideatori.push(posts[i].author)
}
console.log(ideatori)
