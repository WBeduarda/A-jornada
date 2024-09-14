const avanca = document.querySelectorAll(".btn-proximo");

avanca.forEach(button => {
    button.addEventListener("click", function(){
        const atual = document.querySelector(".ativo");
        const proximoPasso = "passo-" + this.getAttribute("data-proxima");

        atual.classList.remove("ativo");
        document,getElementByIdleDeadline(proximoPasso).classList.add("ativo");
    })
})