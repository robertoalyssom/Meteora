const modalProdutos = document.querySelector("[data-modal=produtos]");
const modalForm = document.querySelector("[data-modal=form]");

export async function showModal(productsList) {
  const openModalBtns = document.querySelectorAll("[data-btn]");

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      let btnDataAttibuteValue = event.target.dataset.btn;

      writeModal(productsList, btn);

      if (btnDataAttibuteValue === "produtos") return modalProdutos.showModal();
    });
  });
}

function writeModal(productsList, btn) {
  let productcCardItemName = btn.parentElement.firstElementChild.innerText;

  modalProdutos.innerHTML = "";

  productsList.forEach((product) => {
    if (productcCardItemName.includes(product.nome)) {
      modalProdutos.innerHTML = modalCardMaker(
        product.img[2],
        product.nome,
        product.descricao,
        product.preco
      );
    }
  });

  closeModal();
}

export function closeModal() {
  const closeModalBtns = document.querySelectorAll("[data-close]");

  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let btnDataAttibuteValue = event.target.dataset.close;

      if (btnDataAttibuteValue === "form") return modalForm.close();
      modalProdutos.close();
    });
  });
}

function modalCardMaker(img, nome, descricao, preco) {
  let modalContent = `
  <div class="bg-black text-light p-2 px-3 d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center gap-3">
      <i class="bi bi-check-circle fs-2 verde-limao"></i>
      <h3 class="mb-0 fs-4">Confira detalhes sobre o produto</h3>
    </div>
    <div>
      <i class="btn hover-verde-limao p-0 bi bi-x fs-2 me-1 texto-cinza-escuro" data-close="produtos"
        aria-label="Fechar modal"></i>
    </div>
  </div>
  <div class="row gap-md-3 flex-md-nowrap m-0 p-3 py-3">
    <div class="col-12 col-md-6 p-0">
      <img class="w-100" src="${img}"
        alt="Modelo vestindo jaqueta jeans cor azul e uma toca preta.">
    </div>
    <div class="col-12 col-md-6 d-flex flex-column gap-3 border-modal px-3 px-md-0">
      <h4 class="fs-6 mt-4 mt-md-4">${nome}</h4>
      <p class="detalhes-descricao texto-menor">${descricao}
      </p>
      <p class="fs-5 mt-4 mb-1">${preco}</p>
      <p class="texto-menor cinza-claro">Vendido e entregue por Riachuelo</p>
      <div>
        <h5 class="texto-menor">Cores:</h5>
        <div class="d-flex gap-3">
          <div>
            <input type="radio" id="azul" class="d-block mx-auto"></input>
            <label for="azul" class="texto-menor">Azul claro</label>
          </div>
          <div>
            <input type="radio" id="offwhite" class="d-block mx-auto"></input>
            <label for="offwhite" class="texto-menor">Offwhite</label>
          </div>
          <div>
            <input type="radio" id="preto" class="d-block mx-auto"></input>
            <label for="preto" class="texto-menor">Preto</label>
          </div>
        </div>
      </div>
      <div>
        <h5 class="texto-menor">Tamanho:</h5>
        <div class="d-flex gap-3">
          <div>
            <input type="radio" id="azul" class="d-block mx-auto"></input>
            <label for="azul" class="texto-menor">P</label>
          </div>
          <div>
            <input type="radio" id="offwhite" class="d-block mx-auto"></input>
            <label for="offwhite" class="texto-menor">PP</label>
          </div>
          <div>
            <input type="radio" id="preto" class="d-block mx-auto"></input>
            <label for="preto" class="texto-menor">M</label>
          </div>
          <div>
            <input type="radio" id="preto" class="d-block mx-auto"></input>
            <label for="preto" class="texto-menor">G</label>
          </div>
          <div>
            <input type="radio" id="preto" class="d-block mx-auto"></input>
            <label for="preto" class="texto-menor"> GG</label>
          </div>
        </div>
      </div>
      <div>
        <button type="submit" class="btn btn-lilas rounded-0 mb-md-2">Adicionar à sacola</button>
      </div>
    </div>
  </div>
  `;

  return modalContent;
}
