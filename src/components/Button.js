import React from "react";

export default function Button({ children, ...rest }) {
  return (
    <div>
      <button {...rest}>{children}</button>
    </div>
  );
}
