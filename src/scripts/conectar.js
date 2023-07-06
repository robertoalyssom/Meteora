async function productsList() {
  const promise = await fetch("https://meteora-db.vercel.app/produtos");
  const promiseConverted = await promise.json();

  return promiseConverted;
}

export const conectApi = {
  productsList,
};
