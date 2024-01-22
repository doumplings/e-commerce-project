import { Button } from "antd";

interface Props {
  inStock: boolean | undefined;
  onClick: () => void;
}

export const AddtoCartButton = ({ inStock, onClick }: Props) => {
  return (
    <Button
      type="primary"
      disabled={!inStock}
      style={{ width: "100%" }}
      size="large"
      onClick={onClick}
    >
      Add to Cart
    </Button>
  );
};
