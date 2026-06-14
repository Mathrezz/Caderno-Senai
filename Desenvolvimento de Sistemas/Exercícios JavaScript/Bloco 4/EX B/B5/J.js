const lista = document.getElementById("lista");

const item2 = document.getElementById("item-2");
item2.remove();

const item3 = document.getElementById("item-3");

const novoItem = document.createElement("li");
novoItem.textContent = "Item inserido via JS";

lista.insertBefore(novoItem, item3);

const item1 = document.getElementById("item-1");

const itemSubstituido = document.createElement("li");
itemSubstituido.textContent = "Item substituído";

lista.replaceChild(itemSubstituido, item1);

console.log(lista.innerHTML);