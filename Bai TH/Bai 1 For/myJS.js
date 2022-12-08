let text = '';
let i;
for (i = 0; i < 5; i++) {
    text += 'The number is ' + i + '<br>'
}
document.getElementById('demo').innerHTML = text;

let num = prompt('Enter your number:')

let total = 0;

for(let i = 1; i <= num; i+=1) {
    total += i;
}
alert(total)

