import React from "react";
import Division from "components/atoms/Division/Division";

export default function AppContainer(props) {
  const { children, ...rest } = props;

  return <Division {...rest}>{children}</Division>;
}
