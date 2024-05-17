export default class Modal {
  constructor(btnAbrir, btnFechar, container) {
    this.botaoAbrir = document.querySelector(btnAbrir);
    this.botaoFechar = document.querySelector(btnFechar);
    this.containerModal = document.querySelector(container);
    this.activeClass = "ativo";

    // bind this ao callback para
    // fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }
  // abre ou fecha modal
  toggleModal() {
    this.containerModal.classList.toggle(this.activeClass);
  }
  // adiciona o evento de toggle do modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }
  // fecha modal ao clicar lado de fora
  cliqueForaModal(event) {
    if (event.target === this) {
      this.toggleModal(event);
    }
  }
  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
