import React from "react";
import { Container } from "./style";

export function TextArea({ placeholder, value, onChange, ...rest }) {
  return (
    <Container
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}