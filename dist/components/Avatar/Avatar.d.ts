import React from "react";
import "./Avatar.css";
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    background?: string;
    size?: number;
    mode?: "default" | "app" | "image";
    shadow?: boolean;
    src?: string;
}
declare const Avatar: React.FC<IProps>;
export default Avatar;
