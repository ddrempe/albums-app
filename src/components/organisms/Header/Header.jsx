import Division from "components/atoms/Division/Division";
import React from "react";

export default function Header(props) {
  const { children, ...rest } = props;

  return (
    <header {...rest}>
      <Division>{children}</Division>
      <Division>Search bar</Division>
    </header>
  );
}
