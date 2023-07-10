import { closeModal } from "./modal.js";

const form = document.querySelector("#newsletter-form");
const formField = document.querySelector("[data-formField]");
const errorElement = document.querySelector("#error-email");
const modalForm = document.querySelector("[data-modal=form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  validateEmail();
});

function validateEmail() {
  let fieldValue = formField.value;
  errorElement.innerHTML = "";

  if (fieldValue === "")
    return (errorElement.innerText = "Por favor, digite o seu email!");

  if (fieldValue.length <= 7)
    return (errorElement.innerText = "Preencha o seu email completamente!");

  modalForm.showModal();
  formField.value = "";
  closeModal();
}
