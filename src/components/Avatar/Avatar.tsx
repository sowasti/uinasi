import React from "react";
import "./Avatar.css"
import img from "../image/tt.jpeg";

interface IProps extends React.HTMLAttributes<HTMLDivElement>{

  /** Цвет фона */
  background?: string

  /** Размер аватара в пикселях рекомендуемые значения 96 | 88 | 80 | 72 | 64 | 56 | 48 | 44 | 40 | 36 | 32 | 28 | 24 */
  size?: number 

  /** Формат блока */
  mode?: "default" | "app" | "image"

  /** Наличие тени */
  shadow?: boolean

  /** Путь для добавления картинки в аватар с помощью переданной ссылки. Содержимое получит размеры переданные в size */
  src?: string
}

const Avatar: React.FC<IProps> = ({
  children,
  background = "rgb(0 28 61 / 8%)",
  size = 48,
  mode = "default",
  shadow = false,
  src,
  className,
  style,
  ...props
}) => {
  const shad = shadow ? "Avatar__shadow" : null;
  return (
    <div
      className={`Avatar Avatar__${mode} ${shad} ${className}`}
      style={{...style, width: size, height: size, background }}
      {...props}
    >
       {src && <img style={{width: size, height: size}} src={src} alt=""/>}
       {children && <div className="Avatar__children">{children}</div>}
    </div>
  );
}

export default Avatar;