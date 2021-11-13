import React from "react";
import "./FormItem.css";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Текст над содержимым формы. */
  top?: React.ReactNode

  /** Текст под содержимым формы. Может быть подсказкой, например при невалидном вводе */
  bottom?: React.ReactNode
}

const FormItem: React.FC<IProps> = ({
  children,
  top,
  bottom,
  className,
  ...props
}) => {
  return (
    <div className={`FormItem ${className}`}  {...props}>
      {top && <div className="FormItem__top">{top}</div>}
      {children}
      {bottom && <div className="FormItem__bottom">{bottom}</div>}
    </div>
  );
}

export default FormItem;