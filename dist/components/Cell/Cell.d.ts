import React from "react";
import "./Cell.css";
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    before?: React.ReactNode;
    after?: React.ReactNode;
    description?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}
declare const Cell: React.FC<IProps>;
export default Cell;
