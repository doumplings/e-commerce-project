import { MyCartType, useMyCartContext } from "../../context/myCart.context";
import { InputAmount } from "../inputs/inputAmount";
import { InStockTag } from "./inStockTag";
import { OutOfStockTag } from "./outOfStockTag";
import { Modal } from "antd";
import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";

interface ProductListElementProps {
  item: MyCartType;
}

export const ProductListElement = ({ item }: ProductListElementProps) => {
  const { confirm } = Modal;
  const { setMyCart } = useMyCartContext();

  const handleDeleteItem = () => {
    setMyCart((prev) =>
      prev.filter((product) => product.item.id !== item.item.id)
    );
  };

  const handleStep = (value: number) => {
    setMyCart((prev) =>
      prev.map((product) =>
        product.item.id === item.item.id
          ? { ...product, count: value }
          : product
      )
    );
  };

  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure remove this item?",
      icon: <ExclamationCircleFilled />,
      content: "Will be removed from your cart",
      okText: "Confirm",
      okType: "danger",
      cancelText: "Cancel",
      centered: true,
      onOk() {
        console.log("OK");
        handleDeleteItem();
      },
      onCancel() {
        console.log("canceled");
      },
    });
  };

  return (
    <>
      <li key={item.item.id} className="list-none  ">
        <div className="grid grid-cols-4  ">
          <div className="ml-4">
            <h3>{item.item.name}</h3>
            <p className="w-14">
              {item.item.inStock ? <InStockTag /> : <OutOfStockTag />}
            </p>
          </div>
          <div className="grid place-items-center">
            <p>{item.item.price}</p>
          </div>
          <div className="grid place-items-center">
            <div>
              <InputAmount defaultValue={item.count} onStep={handleStep} />
              <DeleteOutlined
                className="relative left-2"
                onClick={showDeleteConfirm}
              />
            </div>
          </div>
          <div className="grid place-items-center">
            {item.count * item.item.price}$
          </div>
        </div>
      </li>
    </>
  );
};
