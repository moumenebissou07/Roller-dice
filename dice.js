
function rolldice(){
const input = document.getElementById("myinput").value;
const result = document.getElementById("diceresult");
const imgs = document.getElementById("images");
const values = [];
const images = [];

for(let i = 0 ; i<input ;i++){
values.push(Math.round(Math.random()*5)+1);
images.push(`<img src="dices/dice${values[i]}.png" width ="150px" height="150px">`);
}
result.textContent = `dice : ${values.join(`, `)}`;
imgs.innerHTML = images.join(``);
}