import { Collapse, CollapseProps } from "antd";
import { TypeCollapseCheckbox } from "./collapseCheckbox";

export const SiderCollapse = () => {
  const items: CollapseProps["items"] = [
    {
      key: 1,
      label: "Type",
      children: <TypeCollapseCheckbox />,
    },
  ];

  return <Collapse ghost items={items} defaultActiveKey={["1"]} />;
};
