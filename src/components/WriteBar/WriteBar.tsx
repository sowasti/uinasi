import React, { useEffect, useRef } from "react";
import "./WriteBar.css";

const getMaxSize = (el: HTMLTextAreaElement, maxRows: number)=>{
  const style = window.getComputedStyle(el);
  const fontSize = parseInt(style.fontSize);
  const lineHeight = parseInt(style.lineHeight);
  const paddingTop = parseInt(style.paddingTop);
  const paddingBottom = parseInt(style.paddingBottom);  
  return (paddingBottom + paddingTop + maxRows * fontSize + maxRows * (lineHeight - fontSize));
}

interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Содержимое слева от ввода*/
  before?: React.ReactNode

   /** Содержимое справа от ввода*/
  after?: React.ReactNode

  /** Содержимое поверх воля ввода*/
  childAfter?: React.ReactNode

  /** Значение максимальной высоты поля вводы без прокрутки в строчках текста. По умолчанию 30 строк. */
  maxRows?: number
}

const WriteBar: React.FC<IProps> = ({
  before,
  after,
  childAfter,
  maxRows = 30,
  className,
  style,
  onChange,
  ...props
}) => {
  const texRef = useRef<HTMLTextAreaElement>(null);  

  const resize = ()=>{
    if (!texRef.current) return;
    const el = texRef.current;    
    const max = getMaxSize(el, maxRows);
    el.style.height = "";
    const height = el.scrollHeight > max ? max : el.scrollHeight;     
    el.style.height = `${height}px`;
  }
  
  const handleElem = (e: React.ChangeEvent<HTMLTextAreaElement>) => {    
    resize();    
    onChange && onChange(e);
  }
  
  useEffect(() => {
    resize();
  }, []);

  return (
    <div className={`WriteBar ${className}`} style={style}>
      {before && <div className="WriteBar__before">{before}</div>}
      <div className="WriteBar__child">
      <textarea
        {...props}
        ref={texRef}       
        className="WriteBar__textarea"
        onChange={handleElem}
        rows={1}        
      />
      {childAfter && <div className="WriteBar__child__After">{childAfter}</div>}
      </div>
      {after && <div className="WriteBar__after">{after}</div>}
    </div>
  );
}

export default WriteBar;