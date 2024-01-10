import { Collapse, CollapseProps } from "antd";
import { CollapseCheckbox } from "./collapseCheckbox";

export const SiderCollapse = () => {
  const items: CollapseProps["items"] = [
    {
      key: 1,
      label: "Size",
      children: <CollapseCheckbox items={["sm", "md", "lg", "xl"]} />,
    },
    {
      key: 2,
      label: "Colour",
      children: <CollapseCheckbox items={["blue", "red", "green"]} />,
    },
    {
      key: 3,
      label: "Type",
      children: <CollapseCheckbox items={["Tshirt", "Pants"]} />,
    },
  ];

  return <Collapse ghost items={items} defaultActiveKey={["1"]} />;
};
