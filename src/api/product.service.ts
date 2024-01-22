export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
};

export const getAllProducts = async (): Promise<ProductType[]> => {
  const products = await fetch("/data/products.json").then((res) => res.json());
  return products.data;
};

export const getProduct = async (productId: number): Promise<ProductType> => {
  const products = await getAllProducts();
  const product = products.filter((product) => product.id === productId);

  return product[0];
};

export const getSortedProductsByStock = (products: ProductType[]) => {
  let inStockProducts: ProductType[] = [];
  let outOfStockProducts: ProductType[] = [];
  products.map((product) =>
    product.inStock
      ? inStockProducts.push(product)
      : outOfStockProducts.push(product)
  );
  const sortedProducts = inStockProducts.concat(outOfStockProducts);

  return sortedProducts;
};
