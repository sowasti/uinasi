import React from "react";
import "./FormItem.css";
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    top?: React.ReactNode;
    bottom?: React.ReactNode;
}
declare const FormItem: React.FC<IProps>;
export default FormItem;
