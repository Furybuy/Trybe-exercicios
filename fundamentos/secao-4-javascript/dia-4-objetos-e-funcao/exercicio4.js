let maior;
let start = 0;
function maiorValor (list){
    for (let i in list){
        if(list[i]>start){
            maior = i;
            start = list[i];
        }
    }
    return maior;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));