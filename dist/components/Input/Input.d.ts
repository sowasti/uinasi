import React from "react";
import "./Input.css";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    align?: "center" | "right" | "left";
    status?: "valid" | "error";
}
declare const Input: React.FC<IProps>;
export default Input;
