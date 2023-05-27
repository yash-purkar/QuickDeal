export const getProductDetails = async (productId, setProduct) => {
  try {
    const response = await fetch(`/api/products/${productId}`);

    const data = await response.json();
    setProduct(data.product);
  } catch (e) {
    console.log(e)
  }
}