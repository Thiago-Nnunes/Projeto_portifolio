window.addEventListener("scroll", function(){
    let cabecalho = document.querySelector('#cabeca');
    cabecalho.classList.toggle('rolagem', window.scrollY > 0)
});