import { conectApi } from "./conectar.js";
import { showModal } from "./modal.js";

export const productsContainer = document.querySelector("#produtos-container");

export function writeCard(productsList) {
  productsList.forEach((product) => {
    productsContainer.appendChild(
      cardMaker(product.img, product.nome, product.descricao, product.preco)
    );
  });

  showModal(productsList);
}

function cardMaker(img, nome, descricao, preco) {
  const cardContainer = document.createElement("div");
  cardContainer.classList = "col-12 col-md-6 col-xxl-4";

  let imgMobile = img[0];
  let imgTablet = img[1];
  let imgDesktop = img[2];

  cardContainer.innerHTML = `
    <div class="card rounded-0">
      <img class="d-md-none" src="${imgMobile}"
          alt="Modelo vestindo camiseta amarela-mostarda, calça preta com estampa e uma toca na cabeça">
      <img class="d-none d-md-block d-xl-none" src="${imgTablet}"
          alt="Modelo vestindo camiseta amarela-mostarda, calça preta com estampa e uma toca na cabeça">
      <img class="d-none d-xl-block" src="${imgDesktop}"
          alt="Modelo vestindo camiseta amarela-mostarda, calça preta com estampa e uma toca na cabeça">
      <div class="card-body">
          <h5 class="card-title">${nome}</h5>
          <p class="card-text">${descricao}</p>
          <p>${preco}</p>
          <a href="#" class="btn rounded-0 btn-lilas" data-btn="produtos">Ver mais</a>
      </div>
    </div>
    `;

  return cardContainer;
}

writeCard(await conectApi.productsList()); // + productsContainer
