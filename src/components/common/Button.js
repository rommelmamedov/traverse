import React from 'react';
import clsx from "clsx";
import {Link} from "react-router-dom";

function Button(
  {
    isLink,
    url,
    extraClass,
    type,
    onClick,
    variantSize,
    variantColor,
    text,
    title,
    children,
    disabled,
    ...props
  }) {

  return (
    <>
      {isLink? (
        <Link
          to={url}
          tabIndex="-1"
          className={clsx("button", extraClass && extraClass)}
          data-size={variantSize}
          data-color={variantColor}
          title={text? text : title}
        >
           {text ? <span className="text">{text}</span> : children}

        </Link>
      ):(
        <button
          className={clsx("button", extraClass && extraClass, disabled && "isDisabled")}
          data-size={variantSize}
          data-color={variantColor}
          title={text? text : title}
          type={type? type : "button"}
          onClick={onClick}
          disabled={disabled}
          {...props}
        >
          {text ? <span className="text">{text}</span> : children}

        </button>
      )}
    </>
  )
}

export default Button;
