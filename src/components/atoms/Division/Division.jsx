import React from "react";

export default function Division(props) {
  const { children, className, style, ...rest } = props;

  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
}
