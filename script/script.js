let menu = document.getElementById("menu_links") //declarando Menu como variável da class "menu_links"
let menu_barras = document.getElementById("menu_barras")

function mostrarMenu() { // função de mostrar e ocultar o menu de acordo com a condição descrita abaixo
   if (window.getComputedStyle(menu).display == 'none') { // condição que deve mostrar o menu
      menu.style.display = "flex" //executa mostrando o menu

      menu_barras.setAttribute("aria-expanded", "true") // condição para trocar no aria-expanded, a função de false para true
      menu_barras.setAttribute("aria-label", "Fechar o menu") // condição para alternar no aria-label, a função de Abrir o menu para Fechar o menu 

   } else {
      menu.style.display = "none" //senão executa esconda o menu

      menu_barras.setAttribute("aria-expanded", "false") // condição para trocar no aria-expanded, a função de true para false
      menu_barras.setAttribute("aria-label", "Abrir o menu") // condição para alternar no aria-label, a função de Fechar o menu para Abrir o menu 
   }
}

addEventListener("resize", () => { //função para retornar e ocultar o menu de acordo com a resolução da tela
   if (window.innerWidth > 768) {
      menu.style.display = "flex"; // retorna com o menu a partir de 768 pixels
   } else {
      menu.style.display = "none" // retona com o menu hamburguer para menor que 768 pixels
   }
});