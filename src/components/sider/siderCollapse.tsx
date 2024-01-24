import { Collapse, CollapseProps } from "antd";
import { TypeCollapseCheckbox } from "./typeCollapseCheckbox";
import { StockCollapseCheckbox } from "./stockCollapseCheckbox";

export const SiderCollapse = () => {
  const items: CollapseProps["items"] = [
    {
      key: 1,
      label: "Type",
      children: <TypeCollapseCheckbox />,
    },
    {
      key: 2,
      label: "Stock",
      children: <StockCollapseCheckbox />,
    },
  ];

  return <Collapse ghost items={items} defaultActiveKey={["1"]} />;
};
