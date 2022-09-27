/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from './images/logo.png';
import MarkPro from './Mark-Pro.ttf';

const bodyStyles = css`
  @font-face {
    font-family: 'MarkPro';
    src: url(${MarkPro}) format('truetype');
  }
  margin: 0;
  font-size: 14px;
  height: 100%;
  color: #fff;
  line-height: 1.6;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-font-kerning: none;
  font-kerning: none;
  background-color: #232934;
  overflow-x: hidden;
  margin-left: 157.5px !important;
  margin-right: 157.5px !important;
`;

const headerStyles = css`
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding-top: 3.125rem;
  display: block;
  background-color: #232934;
`;

const headerContainerStyles = css`
  // o-container
  display: flex;

  margin-right: auto;
  margin-left: auto;
  align-items: center;
`;

const innerHeaderContainerStylesLeft = css`
  // c-site-head__inner
  display: flex;
  align-items: center;
`;

const innerHeaderContainerStylesRight = css`
  // c-site-head__inner
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
`;

const headerLinkContainer = css`
  margin: 1rem 3.4375rem 0 0;
  padding: 0;
  list-style-type: disc;
`;

const headerButtonContainer = css`
  position: relative;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  font-size: 0.75rem;
  padding: 0.8125rem 1.375rem;
  background-color: #fff;
  will-change: transform;
  margin: 0;
  outline: 0;
  border: 0;
  background: none transparent;
  color: inherit;
  vertical-align: middle;
  text-decoration: none;
  text-transform: none;
  font: inherit;
  box-sizing: inherit;
  line-height: normal;
  cursor: pointer;
  visibility: inherit;
`;

const headerButtonMask = css`
  transform: matrix(1, 0, 0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: top;
  background-color: #ff3665;
  z-index: 2;
  box-sizing: inherit;
  display: block;
  text-align: center;
  font-size: 0.75rem;
  cursor: pointer;
  text-transform: none;
  font: inherit;
  line-height: normal;
  visibility: inherit;
  box-sizing: inherit;
`;

const headerButtonTextTop = css`
  background-color: #fff;
  color: #000;
  transition-duration: 0.8s;
  align-items: center;
  text-transform: uppercase;
  padding: 0.8125rem 1.375rem;
  font-weight: 700;
  text-align: center;
  transition-property: transform, -webkit-transform;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  box-sizing: inherit;
  font-size: 0.75rem;
  font: inherit;
  line-height: normal;
  cursor: pointer;
  visibility: inherit;
`;

const headerButtonTextBottom = css``;

const headerLink = css`
  color: #fff;
  font-weight: 700;
  opacity: 0.75;
  box-sizing: inherit;
  text-decoration: none;
`;

const logoContainer = css`
  width: 1.8125rem;
  height: 1.8125rem;
  margin-right: 3.25rem;
  margin-top: -0.125rem;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
`;

const bodyContainer = css`
  box-sizing: inherit;
  display: block;
  font-size: 1.0625rem;
  color: #fff;
  font-family: MarkPro;
  line-height: 1.6;
  -webkit-text-size-adjust: none;
  padding-top: 200px;
  text-align: center;
`;

function App() {
  return (
    <div css={bodyStyles}>
      <div css={headerStyles}>
        <div css={headerContainerStyles}>
          <div css={innerHeaderContainerStylesLeft}>
            <figure css={logoContainer}>
              <a href="https://www.resolute.ai">
                <img src={logo} alt="logo"></img>
              </a>
            </figure>
            <div css={headerLinkContainer}>
              <a href="https://www.resolute.ai" css={headerLink}>
                Scientific Research Platform
              </a>
            </div>
            <div css={headerLinkContainer}>
              <a href="https://www.resolute.ai" css={headerLink}>
                Products
              </a>
            </div>
            <div css={headerLinkContainer}>
              <a href="https://www.resolute.ai" css={headerLink}>
                How it works{' '}
              </a>
            </div>
            <div css={headerLinkContainer}>
              <a href="https://www.resolute.ai" css={headerLink}>
                Company{' '}
              </a>
            </div>
            <div css={headerLinkContainer}>
              <a href="https://www.resolute.ai" css={headerLink}>
                News{' '}
              </a>
            </div>
            <div css={headerLinkContainer}>
              <a href="https://www.resolute.ai" css={headerLink}>
                Resources{' '}
              </a>
            </div>
          </div>
          <div css={innerHeaderContainerStylesRight}>
            <div css={headerLinkContainer}>
              <a href="https://www.resolute.ai" css={headerLink}>
                Sign in{' '}
              </a>
            </div>
            <div css={headerButtonContainer}>
              <div css={headerButtonMask} />
              <div css={headerButtonTextTop}>
                <span>Request a demo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div css={bodyContainer}>glorb</div>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
      <br />
      <p>glorb</p>
    </div>
  );
}

export default App;
