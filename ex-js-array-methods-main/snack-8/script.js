const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// metodo non corretto (DA RIVEDERE)
const classRoom = students.find((student)=>{
  return student.class === '3C'
})
console.log(classRoom)

// per stampare correttamente il valore 3C in console utilizziamo il metodo forEach, denominado una variabile
// e assegnandola poi nel condizionale all'interno del forEach
let classroom;
students.forEach((student)=>{
  if (student.class === '3C'){
    classroom = '3C'
  }
})
console.log(classroom)

// facciamo lo stesso procedimento del metodo forEach con un ciclo for classico
let classe;
for (let i = 0; i < students.length; i++){
  let student = students[i]

  if (student.class === '3C'){
    classe = '3C'
  }
}
console.log(classe)
