let lances = 0;
while (lances == 0 || lances == null || lances == '' || isNaN(lances)) {
    lances = prompt('Quantos lances de escada você quer?');
}

let aux = ''
while (aux == '' || aux == null) {
    aux = prompt('De qual material? Escolha apenas um.')
}
let material = aux.charAt(0);

const materialCons = material;

for (let i = 0; i < lances; i++) {
    console.log(material);
    material = material + materialCons;
}
