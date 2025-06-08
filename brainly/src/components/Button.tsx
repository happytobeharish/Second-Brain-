import { ReactElement } from "react";

interface ButtonProps {
  varient: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: ()=> void;
  loading?: boolean
}

const varientClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-black ",
};

const defaultStyles = "px-4 py-2 rounded-md flex items-center";

export function Button({ varient, text, startIcon, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={varientClasses[varient] + " " + defaultStyles}>
    <div className="pr-2">
      {startIcon} 
      </div>
      {text}
    </button>
  );
}
