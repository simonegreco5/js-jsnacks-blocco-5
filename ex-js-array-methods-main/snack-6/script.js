const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

// per creare le due array adoperiamo il metodo .filter
// array (longer) zucchine lunghe >= 15
const longer = zucchine.filter((zucchina)=>{
  return zucchina.length >= 15
})

// array (shorter) zucchine lunghe < 15
const shorter = zucchine.filter((zucchina)=>{
  return zucchina.length < 15
})
console.log(longer, shorter)

// facciamo lo stesso utilizzando il metodo forEach, servendoci di due array di appoggio
const long = []; const short = [];

zucchine.forEach((zucchina)=>{

  if (zucchina.length >= 15 ){
    long.push(zucchina)

  } else {
    short.push(zucchina)
  }
})
console.log(long, short)

// facciamo la stessa cosa utilizzando un ciclo for
const longs = []; const shorts = [];

for (let i = 0; i < zucchine.length; i++){
  let zucchina = zucchine[i]

  if (zucchina.length >= 15){ // oppure, senza variabile (zucchina[i].length ...) 
    longs.push(zucchina)

  } else {
    shorts.push(zucchina)
  }
}
console.log(longs, shorts)
