const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// stampiamo con ciclo for
for (let i = 0; i < people.length; i++){
  console.log(people[i].name);
}

// stampiamo con ciclo forEach 
people.forEach((person)=>{
  console.log(person.name);
})