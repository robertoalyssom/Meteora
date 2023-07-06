import { conectApi } from "./conectar.js";
import { writeCard } from "./writeProducts.js";
import { productsContainer } from "./writeProducts.js";

const btnsCategorias = document.querySelectorAll("[data-btn-categorias]");

btnsCategorias.forEach((btn) => {
  btn.addEventListener("click", (event) => filtrate(btn));
});

async function filtrate(btn) {
  let productsList = await conectApi.productsList();

  const filteredList = productsList.filter(
    (product) => product.categoria === btn.dataset.btnCategorias
  );

  productsContainer.innerHTML = "";

  writeCard(filteredList);
}
