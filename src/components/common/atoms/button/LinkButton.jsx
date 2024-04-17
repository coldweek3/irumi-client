import React from "react";
import { styled } from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";

function LinkButton({ children, herf, className }) {
  return (
    <Link to={herf}>
      <Button className={className}>{children}</Button>
    </Link>
  );
}

export default LinkButton;
