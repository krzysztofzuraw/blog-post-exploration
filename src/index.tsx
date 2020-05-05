import * as ReactDOM from 'react-dom';
import React, { FunctionComponent } from 'react';

import './index.scss';

const Root: FunctionComponent = () => <div>Template</div>;

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement);
