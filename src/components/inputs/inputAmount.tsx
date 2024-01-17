import { InputNumber } from "antd";

interface InputAmountProps {
  onStep?: (value: number, info: { type: "down" | "up" }) => void;
  defaultValue?: number;
}

export const InputAmount = ({ onStep, defaultValue }: InputAmountProps) => {
  return (
    <InputNumber
      defaultValue={defaultValue}
      controls
      size="middle"
      min={1}
      max={99}
      onStep={onStep}
    />
  );
};
