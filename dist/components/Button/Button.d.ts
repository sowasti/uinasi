import React from "react";
import "./Button.css";
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    mode?: "primary" | "secondary" | "tertiary" | "commerce" | "destructive" | "outline" | "outline__dark__theme" | "primary__dark__theme" | "tertiary__dark_theme";
    size?: "small" | "medium" | "large";
    stretched?: boolean;
    disabled?: boolean;
}
declare const Button: React.FC<IProps>;
export default Button;
