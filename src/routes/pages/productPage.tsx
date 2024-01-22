import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductType, getProduct } from "../../api/product.service";
import { Content } from "antd/es/layout/layout";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { ProductPageImages } from "../../components/product/productPageImages";
import { useMyCartContext } from "../../context/myCart.context";
import { SuccessAlert } from "../../components/alert/successAlert";
import { ProductDetail } from "../../components/product/productDetail";
import { InputAmount } from "../../components/inputs/inputAmount";
import { AddtoCartButton } from "../../components/button/addToCartButton";
import { BackToProductsButton } from "../../components/button/backToProductsButton";

export const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setMyCart } = useMyCartContext();
  const [product, setProduct] = useState<ProductType>();
  const [productCount, setProductCount] = useState(1);
  const [successVisible, setSuccessVisibility] = useState(false);

  useEffect(() => {
    //get product with location ID & sets it to state
    getProduct(location.state).then((res) => setProduct(res));
  }, [location.pathname]);

  const handleAddtoCartClick = () => {
    if (product === undefined) {
      return;
    } else {
      setMyCart((prev) => {
        // finds if it is a new product and returns true if it is a new product
        const newProduct = () => {
          return prev
            .map((cartProduct) =>
              cartProduct.item.id === product.id ? true : false
            )
            .includes(true);
        };
        if (!newProduct()) {
          //if true, spreads prev and adds new product
          console.log("product not found in cart");
          return [...prev, { item: product, count: productCount }];
        } else {
          // if false, maps through products and adds productCount
          console.log("product found");
          return prev.map((cartProduct) =>
            cartProduct.item.id === product.id
              ? { ...cartProduct, count: productCount + cartProduct.count }
              : cartProduct
          );
        }
      });

      setTimeout(() => {
        setSuccessVisibility(true);
      }, 500);
      setTimeout(() => {
        setSuccessVisibility(false);
        navigate("/products");
      }, 1500);
    }
  };

  return (
    <div className="overflow-hidden">
      <Content
        className="rounded-xl "
        style={{ margin: 24, padding: 12, background: "white" }}
      >
        <Layout>
          <SuccessAlert successVisible={successVisible} />
          <Content className="h-[28rem] bg-white">
            <ProductPageImages />
          </Content>
          <Sider theme="light" width={"36%"}>
            <div className="flex flex-col h-full justify-around pl-4">
              <BackToProductsButton />
              <ProductDetail product={product} />
              <div>
                <div className="mb-4">
                  <InputAmount
                    defaultValue={1}
                    onStep={(value) => setProductCount(value)}
                  />
                </div>
                <AddtoCartButton
                  inStock={product?.inStock}
                  onClick={handleAddtoCartClick}
                />
              </div>
            </div>
          </Sider>
        </Layout>
      </Content>
    </div>
  );
};
