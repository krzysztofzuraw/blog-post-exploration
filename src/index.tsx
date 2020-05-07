import * as ReactDOM from 'react-dom';
import React, { FunctionComponent } from 'react';

import './index.scss';
import avatar from './avatar.jpg';

const Root: FunctionComponent = () => (
  <>
    <nav>
      <svg width="55" height="55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="27.5" cy="27.5" r="27.5" fill="#473144" />
        <path
          d="M37.352 35.82c-1.242 0-2.37.446-3.386 1.117l-14.79-8.38c0-.225.112-.447.112-.56 0-.111 0-.447-.112-.56l14.79-8.378a5.843 5.843 0 003.386 1.117c3.16 0 5.646-2.458 5.646-5.588C42.998 11.46 40.515 9 37.353 9c-3.16 0-5.646 2.458-5.646 5.588 0 .224 0 .335.112.56L17.032 23.53a5.584 5.584 0 00-3.387-1.117c-3.16 0-5.645 2.458-5.645 5.588 0 3.128 2.483 5.588 5.645 5.588 1.243 0 2.371-.446 3.387-1.117l14.79 8.38c0 .225-.113.336-.113.56 0 3.128 2.483 5.588 5.646 5.588C40.515 47 43 44.542 43 41.412c-.002-3.132-2.487-5.592-5.648-5.592z"
          fill="#DF9B6D"
        />
      </svg>
      <h1>Krzysztof Żuraw blog</h1>
      <img src={avatar} />
    </nav>
    <article>Content</article>
    <footer>Footer</footer>
  </>
);

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement);
