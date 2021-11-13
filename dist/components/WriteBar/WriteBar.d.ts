import React from "react";
import "./WriteBar.css";
interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    before?: React.ReactNode;
    after?: React.ReactNode;
    childAfter?: React.ReactNode;
    maxRows?: number;
}
declare const WriteBar: React.FC<IProps>;
export default WriteBar;
