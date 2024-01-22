import { Divider, Input } from "antd";

interface MyCartSider {
  totalPrice: number;
  tax: number;
}

export const MyCartSider = ({ totalPrice, tax }: MyCartSider) => {
  return (
    <>
      <p>Enter discount codes:</p>
      <Input placeholder="Code" />
      <Divider style={{ borderColor: "white", marginBottom: 0 }} />
      <div className="flex flex-col justify-around ">
        <p>
          Amount: <span className="float-right">{totalPrice.toFixed(2)}$</span>
        </p>
        <p>
          Discount: <span className="float-right">0.00</span>
        </p>
        <p>
          Tax: <span className="float-right">{tax.toFixed(2)}$</span>
        </p>
        <Divider style={{ borderColor: "white", margin: 0 }} />
        <h3>
          Total{" "}
          <span className="float-right">{(totalPrice + tax).toFixed(2)}$</span>
        </h3>
      </div>
    </>
  );
};
