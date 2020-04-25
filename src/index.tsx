import * as ReactDOM from 'react-dom';
import React, { FunctionComponent } from 'react';

const Root: FunctionComponent = () => <div>Template</div>;

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement);
