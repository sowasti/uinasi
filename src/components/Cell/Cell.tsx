import React from "react";
import "./Cell.css";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {

  /** Иконка или Avatar слева от children */
  before?: React.ReactNode

  /** Текст в правом углу кнопки*/
  after?: React.ReactNode 

  /** Текст под cheldren */
  description?: React.ReactNode

  /** Убирает анимацию наведения при disabled=true */
  disabled?: boolean

  /** Обработчик события клика */
  onClick?: () => void;
}

const Cell: React.FC<IProps> = ({
  before,
  after,
  description,
  disabled = false,
  children,
  className,
  style,
  ...props
}) => {
  const dis = disabled ? "Cell__disabled" : null;

  return (
    <div
      className={`Cell ${dis} ${className}`}
      style={style}
      {...props}
    >
      <div className="Cell__before">{before}</div>
      <div className="Cell__main">
        <span className="Cell__children">
          {children}
        </span>
        {description && <span className="Cell__description">{description}</span>}
      </div>
      {after && <span className="Cell__after">{after}</span>}
    </div>
  );
}

export default Cell;