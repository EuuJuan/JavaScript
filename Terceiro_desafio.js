/*
1) Faça um algorítimo que dado as 3 notas tiradas por um auluno em um semestre da faculdade CSSLayerBlockRule
e imprima a sua média e a sua classificação conforme a tabela abaixo

Media = (Primeira_media + Segunda_media + Terceira_media) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, Recuperação;
- Média acima de 7, passou de semestre;
*/

const Primeira_media = 10;
const Segunda_media = 9;
const Terceira_media = 10;

const Media = (Primeira_media + Segunda_media + Terceira_media) / 3;

if(Media < 5){
    console.log("Voce foi Reprovado com:", Media.toFixed(2));
}else if(Media >= 5 && Media <= 7) {
    console.log("Voce esta de Recuperacao com:", Media.toFixed(2));
} else {
    console.log("Voce passou de semestre com:", Media.toFixed(2));
}