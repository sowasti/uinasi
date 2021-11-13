import React from "react";
import "./Input.css";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  
  /** Позиционирование текста по горизонтали */
  align?: "center" | "right" | "left"

  /** Подсвечивает инпут при не валидном вводе если status="error" */
  status?: "valid" | "error"
}

const Input: React.FC<IProps> = ({
  align = "left",
  status = "valid",
  className,
  style,
  ...props
}) => {
  return (    
      <input
        className={`Input__elem Input__align__${align} Input__${status} ${className}`}
        style={style}
        {...props}
      />   
  );
}

export default Input;