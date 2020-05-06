import * as ReactDOM from 'react-dom';
import React, { FunctionComponent } from 'react';

import './index.scss';

const Root: FunctionComponent = () => (
  <>
    <nav>Navbar</nav>
    <article>Content</article>
    <footer>Footer</footer>
  </>
);

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement);
