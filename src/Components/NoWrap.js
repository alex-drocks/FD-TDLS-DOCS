import React from "react";

export default function NoWrap({children}) {
  return (
    <span style={{whiteSpace:"nowrap"}}>{children}</span>
  )
}