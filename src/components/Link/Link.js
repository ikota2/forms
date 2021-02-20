import React from "react";
import { Link as RRLink } from "react-router-dom";

export function Link({ disabled, to, children }) {
  if (disabled) {
    return <span>{children}</span>;
  }
  return <RRLink to={to}>{children}</RRLink>;
}
