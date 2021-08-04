let sum = document.querySelector('.sum');
let btnUSD = document.querySelector('.usd');
let btnEuro = document.querySelector('.euro');
let result = document.querySelector('.result');


btnUSD.addEventListener('click', ()=>{
    let usd = 10654
    let summa = parseFloat(sum.value/usd).toFixed(2)
    result.innerHTML = ` $ ${summa} USD `;
})

btnEuro.addEventListener('click', ()=>{
    let usd = 12674
    let summa = parseFloat(sum.value/usd).toFixed(2)
    result.innerHTML = ` € ${summa}  Euro `;
})