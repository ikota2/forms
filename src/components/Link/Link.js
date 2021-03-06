import React from "react";
import { Link as RRLink } from "react-router-dom";
import "./link.css";

export function Link({ disabled, to, children }) {
  if (disabled) {
    return <span className='link link__invalid'>{children}</span>;
  }
  return (
    <RRLink to={to} className='link link__valid'>
      {children}
    </RRLink>
  );
}
