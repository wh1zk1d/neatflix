import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #ED3919;
    --color-button-bg: HSL(208.7, 100%, 64.3%);
    --color-button-bg_hover: HSL(212.7, 100%, 64.3%);
    
    --font: 'Avenir Next', 'Inter', sans-serif;

    --border-radius: 4px;

    --base-padding: 8px;
    --padding-x: calc(var(--base-padding) * 2);
    --padding-y: var(--base-padding);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body { height: 100%; }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: #000 url(https://prod-static.disney-plus.net/eu-west-1/sections/app/builds/b894c8c8939d2ef966f2d5434ad1ba574656fc59_1588166918839/sections/app/node_modules/dss-junglebook/components/themes/images/background.png) no-repeat fixed center center / cover;
    color: #fff;
    font-family: var(--font);
    font-size: 1.6rem;
    line-height: 1.15;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyles
