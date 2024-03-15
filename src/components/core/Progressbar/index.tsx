import React, { FC } from "react";
import { Progress } from "@nextui-org/react";
interface Props {
  label?: string;
  value: number | string;
  size?: string;
  color?: string;
}
const ProgressBar: FC<Props> = ({ label, value, color, size }) => {
  return (
    <Progress
      size="sm"
      radius="sm"
      classNames={{
        track: `bg-[#D9D9D95C] h-[5px] rounded-sm`,
        indicator: `bg-[${color}] rounded-sm`,
        label: "font-bold text-[10px]",
        value: "font-bold text-[10px]",
      }}
      className="w-full gap-0 progressBar-custom rounded-sm"
      label={label ?? ""}
      value={value}
      showValueLabel={true}
    />
  );
};
export default ProgressBar;
