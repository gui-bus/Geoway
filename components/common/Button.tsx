import { ReactNode } from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: ReactNode | string;
  variant: "btn_dark" | "btn_dark_mobile";
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}`}>
      {icon && icon}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
