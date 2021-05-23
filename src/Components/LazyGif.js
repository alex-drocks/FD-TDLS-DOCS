import React from "react";
import LazyLoad from 'react-lazyload';

export default function LazyGif({relativePath, alt, height}) {
  return (
    <LazyLoad height={height}>
      <img
        src={`https://docs.finance-d.com/logiciel-tenue-de-livres-simplifiee/img/${relativePath}`}
        alt={alt}
      />
      <br/>
      <br/>
    </LazyLoad>
  )
}