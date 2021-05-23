import React from "react";
import LazyLoad from "react-lazyload";

export default function ModernVideo({webmSrc, mp4Src, height}) {
  return (
    <LazyLoad once={true} height={height}>
      <figure className="figure">
        <video
          className={"video"}
          controls loop muted playsInline autoPlay
        >
          <source
            src={`https://docs.finance-d.com/logiciel-tenue-de-livres-simplifiee/img/${webmSrc}`}
            type="video/webm"
          />
          <source
            src={`https://docs.finance-d.com/logiciel-tenue-de-livres-simplifiee/img/${mp4Src}`}
            type="video/mp4"
          />
          {/*Fallback in case there's no support for the video sources*/}
          Désolé, votre navigateur ne supporte pas les vidéos.
        </video>
      </figure>
    </LazyLoad>
  );
}
