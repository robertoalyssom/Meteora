async function productsList() {
  const promise = await fetch("http://localhost:3000/produtos");
  const promiseConverted = await promise.json();

  return promiseConverted;
}

export const conectApi = {
  productsList,
};
