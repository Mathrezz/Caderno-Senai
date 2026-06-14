const foto = document.getElementById("foto");
const link = document.getElementById("link");
const campo = document.getElementById("campo");

foto.setAttribute("src", "https://ambrosia.com.br/wp-content/uploads/2015/06/image-image-jpg.webp");

link.setAttribute("href", "https://github.com/Mathrezz/Caderno-Senai.git");
link.textContent = "Meu GitHub";

campo.setAttribute("disabled", "");

console.log(foto.getAttribute("src"));