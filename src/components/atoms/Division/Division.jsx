import React from "react";

export default function Division(props) {
  const { children, className, style } = props;

  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
}
