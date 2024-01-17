import { Divider, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { useMyCartContext } from "../../context/myCart.context";
import { ProductListElement } from "../../components/product/productListElement";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { MyCartSider } from "../../components/sider/myCartSider";

export const MyCartPage = () => {
  const { myCart } = useMyCartContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    myCart.map((product) =>
      setTotalPrice((prev) => prev + product.count * product.item.price)
    );
    setTax(totalPrice * 0.1);
    return () => {
      setTotalPrice(0);
    };
  }, [myCart, totalPrice]);

  console.log(totalPrice);

  return (
    <Layout>
      <Content>
        {myCart.length === 0 ? (
          <div className="grid w-full h-full place-items-center">
            <div>
              <ShoppingCartOutlined />
              Add items to your cart!!
            </div>
          </div>
        ) : (
          <div className=" grid grid-cols-4 place-items-center ">
            <h4>Item</h4>
            <h4>Each</h4>
            <h4>Amount</h4>
            <h4>Total</h4>
          </div>
        )}
        <Divider style={{ margin: 0 }} />
        <ul className="pl-0 m-0 ">
          {myCart.map((item) => {
            return (
              <>
                <ProductListElement item={item} />
                <Divider style={{ margin: 0 }} />
              </>
            );
          })}
        </ul>
      </Content>
      <Sider width={"30%"} className="text-white p-8">
        <MyCartSider totalPrice={totalPrice} tax={tax} />
      </Sider>
    </Layout>
  );
};
