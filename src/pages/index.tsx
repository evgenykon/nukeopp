import * as React from "react"

import "../styles/nuclear.scss"


const text = {};
// <a href={`${docLink.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}>{docLink.text}</a>

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Nuclear Opposition</title>
      <div id="splash" className="middle">
        <h1>Nuclear Opposition</h1>
        <p className="subtitle">Some short comment</p>
      </div>
      <div id="gallery on-scroll"></div>
    </main>
  )
}

export default IndexPage
