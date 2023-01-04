import React from "react";

export default function VideoLink({url, title, duration, style, children}) {
  return (<>
    <div className="content" style={
      Object.assign({},
        {border: "1px dashed black", padding: "1em", boxShadow: "8px 8px 1px rgba(0,0,0,.75)"},
        style
      )}
    >

      <a
        href={url}
        target="_blank"
        style={{display: "flex", fontWeight: "bold", alignItems: "center"}}
      >
        <svg width={35} height={35}
             viewBox="0 0 24 24"
             style={{marginRight: "0.7em"}}
             xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 20v-6l5 3-5 3zM24 4.375l-.008-.042L22.984 0 1.815 4.196C.761 4.405 0 5.33 0 6.403V21c0 1.657 1.343 3 3 3h18c1.656 0 3-1.343 3-3V7H11.266L24 4.375zm-3.89-2.618l2.396 1.604-2.994.595-2.398-1.605 2.996-.594zm-5.897 1.169l2.399 1.606-2.993.595-2.402-1.607 2.996-.594zM8.308 4.097l2.403 1.608-2.993.595-2.406-1.61 2.996-.593zM10.846 8l-2.039 2H5.753l2.039-2h3.054zm8.978 0h3.054l-2.038 2h-3.055l2.039-2zm-6.012 0h3.053l-2.039 2h-3.053l2.039-2zM22 12v8.75c0 .69-.56 1.25-1.25 1.25H3.25C2.56 22 2 21.44 2 20.75V12h20z"/>
        </svg>
        Voir la vidéo &rarr;
      </a>

      <p className="video-details" style={{lineHeight: "100%", marginBottom: "0.25em", marginTop: "0.7em"}}>
        <i><span className="duration">{duration}</span> <span className="youtube-title">{title}</span></i>
      </p>

      {
        children ? (<>
          <br/>
          <p className="description"
             style={{lineHeight: "100%", marginBottom: "0.25em", color: "#505050", fontSize: "90%"}}>
            {children}
          </p>
        </>) : null
      }

    </div>
    <br/>
  </>);
}
