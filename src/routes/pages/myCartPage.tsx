import { Divider, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { useMyCartContext } from "../../context/myCart.context";
import { ProductListElement } from "../../components/product/productListElement";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { MyCartSider } from "../../components/sider/myCartSider";
import { motion } from "framer-motion";

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
    <Layout className="overflow-hidden">
      <Content className="overflow-auto">
        {myCart.length === 0 ? (
          <div className="grid w-full h-3/4 translate-y-24 place-items-center">
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
              <motion.div
                key={item.item.id}
                initial={{ y: -100 * item.item.id }}
                animate={{ y: 0, transition: { delay: 0.1 * item.item.id } }}
              >
                <ProductListElement item={item} />
                <Divider style={{ margin: 0 }} />
              </motion.div>
            );
          })}
        </ul>
      </Content>
      <Sider width={"30%"} className="text-white p-8">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0, transition: { type: "spring", duration: 0.5 } }}
        >
          <MyCartSider totalPrice={totalPrice} tax={tax} />
        </motion.div>
      </Sider>
    </Layout>
  );
};
