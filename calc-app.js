
/*  SUPER SIMPLE CALC   */

const sum = document.querySelector('#sum');
const sub = document.querySelector('#sub');
const divide = document.querySelector('#divide');
const mul = document.querySelector('#mul');
const mod = document.querySelector('#mod');
const clear = document.querySelector('#clear');
const input1 = document.querySelector('#input-1');
const input2 = document.querySelector('#input-2');

function render(result) {
    document.querySelector('#result').textContent = result
}

/* ON-CLICK EVENT FUNCTIONS */

sum.addEventListener('click',() => {
    render(Number(input1.value) + Number(input2.value));
});
sub.addEventListener('click',() => {
    render(Number(input1.value) - Number(input2.value));
});
divide.addEventListener('click',() => {
    render(Number(input1.value) / Number(input2.value));
});
mul.addEventListener('click',() => {
    render(Number(input1.value) * Number(input2.value));
});
mod.addEventListener('click',() => {
    render(Number(input1.value) % Number(input2.value));
});
clear.addEventListener('click',() => {
    input1.value = '';
    input2.value = '';
    render('Result');
});