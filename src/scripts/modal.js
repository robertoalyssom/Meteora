const modalProdutos = document.querySelector("[data-modal=produtos]");
const modalForm = document.querySelector("[data-modal=form]");

export default function showAndCloseModal() {
  const openModalBtns = document.querySelectorAll("[data-btn]");
  const closeModalBtns = document.querySelectorAll("[data-close]");

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      let btnDataAttibuteValue = event.target.dataset.btn;

      showModal(btnDataAttibuteValue);
    });
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let btnDataAttibuteValue = event.target.dataset.close;

      closeModal(btnDataAttibuteValue);
    });
  });
}

function showModal(btnDataAttibuteValue) {
  if (btnDataAttibuteValue === "form") return modalForm.showModal();
  modalProdutos.showModal();
}

function closeModal(btnDataAttibuteValue) {
  if (btnDataAttibuteValue === "form") return modalForm.close();
  modalProdutos.close();
}
