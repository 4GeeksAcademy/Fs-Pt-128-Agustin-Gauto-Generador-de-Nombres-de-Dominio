let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extencion = ['.com', '.ar', '.es', '.net']

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let g = 0; g < extencion.length; g++) {
        console.log(pronoun[i] + adj[j] + noun[k] + extencion[g]);
      }
    }
  }
}
  

