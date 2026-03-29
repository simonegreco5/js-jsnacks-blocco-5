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

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

// utilizziamo il metodo .find per trovare la persona con l'id: 2
const person = students.find((student)=>{
  return student.id === 2
})
console.log(person);

// facciamo la stessa cosa con il metodo forEach, utilizzando un array di appoggio
const persona = []
students.forEach((student)=>{
  if (student.id === 2){
    persona.push(student)
  }
})
console.log(persona)

// facciamo lo stesso con il ciclo for
const alunno = []
for (let i = 0; i < students.length; i++){
  if (students[i].id === 2){
    alunno.push(students[i])
  }
}
console.log(alunno)
