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

export const getSortedProductsByType = async (type: {
  tShirt: boolean;
  pants: boolean;
}): Promise<ProductType[]> => {
  const products = await getAllProducts();
  const tShirtProducts = products.filter(
    (product) => product.name === "T-shirt"
  );
  const pantsProducts = products.filter((product) => product.name === "Pants");

  if (type.tShirt) {
    if (type.pants) {
      const bothTypesProducts = tShirtProducts.concat(pantsProducts);
      return getSortedProductsByStock(bothTypesProducts);
    } else {
      return getSortedProductsByStock(tShirtProducts);
    }
  } else {
    if (type.pants) {
      return getSortedProductsByStock(pantsProducts);
    } else {
      return [];
    }
  }
};

export const getProductByName = async (
  name: string
): Promise<ProductType[]> => {
  const products = await getAllProducts();
  const filteredProducts = products.filter(
    (product) => product.name.toLowerCase().indexOf(name) !== -1
  );
  return filteredProducts;
};
