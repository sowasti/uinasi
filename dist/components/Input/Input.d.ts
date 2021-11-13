import React from "react";
import "./Input.css";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    align?: "center" | "right" | "left";
    status?: "valid" | "error";
    onChange?: () => void;
}
declare const Input: React.FC<IProps>;
export default Input;
