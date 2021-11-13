import React from "react";
import "./Button.css";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  /** Типы кнопок */
  mode?: "primary"
  | "secondary"
  | "tertiary"
  | "commerce"
  | "destructive"
  | "outline"
  | "outline__dark__theme"
  | "primary__dark__theme"
  | "tertiary__dark_theme"

  /** Возможные размеры */
  size?: "small" | "medium" | "large"

  /** Растягивание кнопки по ширире */
  stretched?: boolean

  /** Стиль отключенной кнопки */
  disabled?: boolean

  /** Обработчик события клика */
  onClick?: () => void
}

const Button: React.FC<IProps> = ({
  mode = "primary",
  size = "medium",
  children,
  stretched = false,
  disabled = false,
  ...props
}) => {
  const stretch = stretched ? "Button__stretched" : null;
  const disbl = disabled ? "Button__disabled" : null;
  return (
    <button
      className={`Button Button__${size} Button__${mode} ${stretch} ${disbl}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;