async function productsList() {
  const promise = await fetch("https://meteora-db.vercel.app/produtos");
  const promiseConverted = await promise.json();

  return promiseConverted;
}

async function searchList(searchFieldValue) {
  const searchedProducts = await fetch(
    `https://meteora-db.vercel.app/produtos?q=${searchFieldValue}`
  );

  const convertedSearchedList = await searchedProducts.json();

  return convertedSearchedList;
}

export const conectApi = {
  productsList,
  searchList,
};
