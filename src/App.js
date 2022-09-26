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
`;

const headerStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding-top: 3.125rem;
  display: block;
`;

const headerContainerStyles = css`
  // o-container
  display: flex;
  padding-left: 157.5px;
  padding-right: 157.5px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
`;

const innerHeaderContainerStylesLeft = css`
  // c-site-head__inner
  display: flex;
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

const headerButtonContainer = css``;

const headerLink = css`
  color: #fff;
  font-weight: 700;
  opacity: 0.75;
  box-sizing: inherit;
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

function App() {
  return (
    <div css={bodyStyles}>
      <header css={headerStyles}>
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
            <div css={headerLinkContainer}>
              <a href="https://www.resolute.ai" css={headerLink}>
                Button{' '}
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
