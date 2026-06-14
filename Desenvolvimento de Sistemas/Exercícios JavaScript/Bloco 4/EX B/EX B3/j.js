const container = document.getElementById("container");

const titulo = container.firstElementChild;
const descricao = titulo.nextElementSibling;
const tag = descricao.nextElementSibling;
const containerPai = tag.parentElement;

console.log(titulo.textContent);
console.log(descricao.textContent);
console.log(containerPai.textContent);