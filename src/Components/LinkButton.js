import React from "react";
import Link from "@docusaurus/core/lib/client/exports/Link";

export default function LinkButton({to, href, children}) {
  return (
    <Link to={to} href={href}>
      <button className={"linkButton"}>
        {children}
      </button>
    </Link>
  );
}