const itens = document.querySelectorAll("#lista .item");

itens.forEach((item, index) => {
  console.log(`${index + 1}: ${item.textContent}`);
});

itens[2].classList.add("destaque");