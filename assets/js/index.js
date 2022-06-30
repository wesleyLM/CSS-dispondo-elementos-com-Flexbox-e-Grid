let $ = document.querySelector.bind(document)

let cabecalhoMenu = $('[data-cabecalho-menu]')
let menuLateral = $('[data-menu-lateral]')

cabecalhoMenu.addEventListener('click', e =>{
    menuLateral.classList.toggle('ativo')
})