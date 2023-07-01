const input = document.getElementById('display');

var expression = '';

const press = (number) =>{
    expression += number;
    input.value = expression;
}

const equal = () =>{
    input.value = eval(expression)
    expression = ''

}

const erase = () =>{
    input.value = '';
    expression =''
}
const delet = () =>{
    input.value= input.value.toString().slice(0,-1)
    expression='';
}