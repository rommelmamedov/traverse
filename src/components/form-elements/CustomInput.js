import React from 'react';
import clsx from "clsx";
import { useField} from 'formik';

function CustomInput(
  {
    extraClass,
    removeMarginBottom,
    type,
    id,
    hideLabel,
    labelText,
    ...props
  }) {
  const [field, meta] = useField(props);
  return (
    <div
      className={clsx(
        "formGroup",
        removeMarginBottom && "noMarginBottom",
        type=== "textarea" && "isTextArea",
        meta.touched && meta.error && "invalid",
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
          id={id}
          {...field}
          {...props}
        />
      ):(
        <input
          id={id}
          type={type? type : "text"}
          {...field}
          {...props}
        />
      )}
      {meta.touched && meta.error ? (
        <div className="formGroupError">{meta.error}</div>
      ) : null}

    </div>
  )
}

export default CustomInput;
