import { Checkbox } from "antd";

interface CollapseCheckboxProps {
  items: string[] | number[];
}

export const CollapseCheckbox = ({ items }: CollapseCheckboxProps) => {
  return (
    <div>
      {items.map((item) => {
        return <Checkbox key={item}>{item}</Checkbox>;
      })}
    </div>
  );
};
