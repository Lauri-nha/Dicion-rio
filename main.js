const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fundoModal = document.querySelector("#fundo-modal");


// Aqui eu preciso identificar se o modal está aberto ou fechado  e então adicionar um toggle (toggle = método que permite alternar entre dois estados quando clicado, no meu caso, alternar entre o fechar e abrir modal. Para isso eu crio uma variavel com o nome de toggleModal e vinculo ela à classe "hide" do css, também pego o fundo do modal e faço o mesmo.)
const toggleModal = () => {
    modal.classList.toggle("hide");
    fundoModal.classList.toggle("hide");
}

// No toggle, se a classe está, ela será removida, se não está, será adicionada. No cenario atual ele irá adicionar e remover o modal (janela com a palavra e definição) e remover o modal, agora preciso definir como irá ocorrer o evento do click

// aqui eu vou pegar todas as vaariáveis que irão ser executadas com click e vou definir como elemento, depois botei um console log para testar se o evento estava funcionando
[openModalButton, closeModalButton, fundoModal].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

const open2 = document.querySelector("#open-btn-2")
const close2 = document.querySelector("#close-btn-2")
const modal2 = document.querySelector("#modal2")
const fundo2 = document.querySelector("#fundo2")

const toggleModal2 = () => {
    modal2.classList.toggle("hide");
    fundo2.classList.toggle("hide");
}

[open2, close2, fundo2].forEach((el) => {
    el.addEventListener("click", () => toggleModal2());
})

const open3 = document.querySelector("#open-btn-3")
const close3 = document.querySelector("#close-btn-3")
const modal3 = document.querySelector("#modal3")
const fundo3 = document.querySelector("#fundo3")

const toggleModal3 = () => {
    modal3.classList.toggle("hide");
    fundo3.classList.toggle("hide");
}

[open3, close3, fundo3].forEach((el) => {
    el.addEventListener("click", () => toggleModal3());
})

const open4 = document.querySelector("#open-btn-4")
const close4 = document.querySelector("#close-btn-4")
const modal4 = document.querySelector("#modal4")
const fundo4 = document.querySelector("#fundo4")

const toggleModal4 = () => {
    modal4.classList.toggle("hide");
    fundo4.classList.toggle("hide");
}

[open4, close4, fundo4].forEach((el) => {
    el.addEventListener("click", () => toggleModal4());
})

const open5 = document.querySelector("#open-btn-5")
const close5 = document.querySelector("#close-btn-5")
const modal5 = document.querySelector("#modal5")
const fundo5 = document.querySelector("#fundo5")

const toggleModal5 = () => {
    modal5.classList.toggle("hide");
    fundo5.classList.toggle("hide");
}

[open5, close5, fundo5].forEach((el) => {
    el.addEventListener("click", () => toggleModal5());
})

const open6 = document.querySelector("#open-btn-6")
const close6 = document.querySelector("#close-btn-6")
const modal6 = document.querySelector("#modal6")
const fundo6 = document.querySelector("#fundo6")

const toggleModal6 = () => {
    modal6.classList.toggle("hide");
    fundo6.classList.toggle("hide");
}

[open6, close6, fundo6].forEach((el) => {
    el.addEventListener("click", () => toggleModal6());
})

const open7 = document.querySelector("#open-btn-7")
const close7 = document.querySelector("#close-btn-7")
const modal7 = document.querySelector("#modal7")
const fundo7 = document.querySelector("#fundo7")

const toggleModal7 = () => {
    modal7.classList.toggle("hide");
    fundo7.classList.toggle("hide");
}

[open7, close7, fundo7].forEach((el) => {
    el.addEventListener("click", () => toggleModal7());
})

const open8 = document.querySelector("#open-btn-8")
const close8 = document.querySelector("#close-btn-8")
const modal8 = document.querySelector("#modal8")
const fundo8 = document.querySelector("#fundo8")

const toggleModal8 = () => {
    modal8.classList.toggle("hide");
    fundo8.classList.toggle("hide");
}

[open8, close8, fundo8].forEach((el) => {
    el.addEventListener("click", () => toggleModal8());
})
const open9 = document.querySelector("#open-btn-9")
const close9 = document.querySelector("#close-btn-9")
const modal9 = document.querySelector("#modal9")
const fundo9 = document.querySelector("#fundo9")

const toggleModal9 = () => {
    modal9.classList.toggle("hide");
    fundo9.classList.toggle("hide");
}

[open9, close9, fundo9].forEach((el) => {
    el.addEventListener("click", () => toggleModal9());
})
const open10 = document.querySelector("#open-btn-10")
const close10 = document.querySelector("#close-btn-10")
const modal10 = document.querySelector("#modal10")
const fundo10 = document.querySelector("#fundo10")

const toggleModal10 = () => {
    modal10.classList.toggle("hide");
    fundo10.classList.toggle("hide");
}

[open10, close10, fundo10].forEach((el) => {
    el.addEventListener("click", () => toggleModal10());
})
