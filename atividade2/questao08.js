let notas = [5.5, 7.0, 8.2, 4.9, 9.5];
function aprovado(nota){
    return nota > 6;
}
selecao = notas.filter(aprovado);
arredondadas = selecao.map(Math.round);
console.log(arredondadas)