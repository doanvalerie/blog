export default async function createCollectionItem(
  collection: string,
  payload: Object
) {
  fetch(`${process.env.API_URL}/api/collection/${collection}`, {
    method: 'POST',
    body: JSON.stringify({
      ...payload,
    }),
  });
}
