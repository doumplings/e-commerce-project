import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useProductsContext } from "../../context/products.context";
import { getSortedProductsByType } from "../../api/product.service";

export const TypeCollapseCheckbox = () => {
  const { setProducts } = useProductsContext();
  const [shirtCheckbox, setShirtCheckbox] = useState(true);
  const [pantsCheckbox, setPantsCheckbox] = useState(true);

  useEffect(() => {
    getSortedProductsByType({
      tShirt: shirtCheckbox,
      pants: pantsCheckbox,
    }).then((res) => setProducts(res));
  }, [shirtCheckbox, pantsCheckbox]);

  return (
    <div>
      <Checkbox
        checked={shirtCheckbox}
        onChange={() => setShirtCheckbox(!shirtCheckbox)}
      >
        T-shirt
      </Checkbox>
      <Checkbox
        checked={pantsCheckbox}
        onChange={() => setPantsCheckbox(!pantsCheckbox)}
      >
        Pants
      </Checkbox>
    </div>
  );
};
