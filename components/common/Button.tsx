import { ReactNode } from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon_start?: ReactNode | string;
  icon_end?: ReactNode | string;
  variant: string;
};

const Button = ({
  type,
  title,
  icon_start,
  icon_end,
  variant,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon_start && icon_start}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
      {icon_end && icon_end}
    </button>
  );
};

export default Button;
