import React from 'react';
import clsx from "clsx";

function CustomInput(
  {
    extraClass,
    removeMarginBottom,
    type,
    id,
    name,
    placeholder,
    disabled,
    hideLabel,
    labelText,
    ...props
  }) {

  return (
    <div
      className={clsx(
        "formGroup",
        removeMarginBottom && "noMarginBottom",
        type=== "textarea" && "isTextArea",
        extraClass && extraClass)
      }
    >

      <label
        className={clsx(hideLabel && "visuallyHidden")}
        htmlFor={id}
      >
        {labelText}
      </label>

        {type === "textarea" ? (
          <textarea
            name={name}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            {...props}
          />
        ):(
          <input
            type={type ? type : "text"}
            id={id}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            {...props}
          />
        )}

    </div>
  )
}

export default CustomInput;
