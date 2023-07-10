import { conectApi } from "./conectar.js";
import { writeCard } from "./writeProducts.js";
import { productsContainer } from "./writeProducts.js";

const searchField = document.querySelector("#search-field");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();

  searchProducts();
});

async function searchProducts() {
  let searchFieldValue = searchField.value;
  let searchedProductsList = await conectApi.searchList(searchFieldValue);

  if (searchedProductsList.length > 0) {
    productsContainer.innerHTML = "";

    writeCard(searchedProductsList);
  } else {
    productsContainer.innerHTML = `
    <div class="container mx-auto mb-4 border border-danger text-center p-3">
      <i class="bi bi-emoji-frown-fill text-danger fs-1 d-inline-block mb-2"></i>
      <p class=" fs-3 text-danger">Ops! Infelizmente, o produto "${searchFieldValue}" não faz parte do nosso catálogo atualmente.</p>
    </div>
    `;
  }
}
