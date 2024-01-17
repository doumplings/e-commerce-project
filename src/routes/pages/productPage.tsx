import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductType, getProduct } from "../../api/product.service";
import { Content } from "antd/es/layout/layout";
import { Button, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { LeftOutlined } from "@ant-design/icons";
import { ProductPageImages } from "../../components/product/productPageImages";
import { useMyCartContext } from "../../context/myCart.context";
import { SuccessAlert } from "../../components/alert/successAlert";
import { ProductDetail } from "../../components/product/productDetail";
import { InputAmount } from "../../components/inputs/inputAmount";

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
      setMyCart((prev) => [...prev, { item: product, count: productCount }]);
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
              <Button
                className="absolute top-0 left-0"
                type="link"
                onClick={() => navigate("/products")}
              >
                <LeftOutlined /> Back to products
              </Button>
              <ProductDetail product={product} />
              <div>
                <div className="mb-4">
                  <InputAmount
                    defaultValue={1}
                    onStep={(value) => setProductCount(value)}
                  />
                </div>
                <Button
                  type="primary"
                  disabled={!product?.inStock}
                  style={{ width: "100%" }}
                  size="large"
                  onClick={handleAddtoCartClick}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </Sider>
        </Layout>
      </Content>
    </div>
  );
};
