console.log("hello world");

const name="al amine"
console.log(name);

let prenom ="DIOP"

console.log(prenom);

prenom= "Abdou"

console.log(prenom)

let nom_complet = name + " " + prenom

console.log("le nom complet est:" ,nom_complet)

for(let i=1; i<=10; i++) {
    console.log("iteration: " ,i)

}
const tab= ["lundi", "mardi", "mecredi", "jeudi", "v", "sam", "dim"]
for(let i=0; i<=6; i++){
    console.log(tab[i])

}
for(const iteration in tab) {
    console.log(iteration)

}
for(const jour of tab) {
    console.log(jour)

}



