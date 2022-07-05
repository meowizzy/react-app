import React from "react"
import ContentLoader from "react-content-loader"

const Preloader = (props) => (
  <ContentLoader 
    speed={1}
    width={275}
    height={500}
    viewBox="0 0 275 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="136" cy="136" r="134" /> 
    <rect x="1" y="289" rx="10" ry="10" width="270" height="25" /> 
    <rect x="307" y="372" rx="0" ry="0" width="81" height="92" /> 
    <circle cx="129" cy="119" r="117" /> 
    <rect x="1" y="332" rx="10" ry="10" width="270" height="87" /> 
    <rect x="1" y="444" rx="10" ry="10" width="88" height="30" /> 
    <rect x="133" y="438" rx="30" ry="30" width="134" height="43" />
  </ContentLoader>
)

export default Preloader