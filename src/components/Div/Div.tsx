import React from "react";
import "./Div.css";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {  
}

const Div: React.FC<IProps> = ({ children, className, ...props }) => {
  return (
    <div className={`Div ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Div;