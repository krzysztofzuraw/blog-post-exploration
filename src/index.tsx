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
    <section>
      <h2>Blog</h2>
      <svg width="3" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1.5" y1="-5.66774e-10" x2="1.5" y2="1110" stroke="#473144" stroke-width="3" />
      </svg>
    </section>
    <article>
      <p className="subhead">
        Anim aliquip cillum sint tempor id consequat aliqua ipsum incididunt consequat veniam. Anim
        voluptate do pariatur eiusmod duis magna elit eu. Magna dolore quis dolore mollit aliquip
        culpa veniam et. Lorem in nisi cillum veniam pariatur nisi velit ex labore nostrud cillum.
        Esse aute occaecat minim amet sit et qui minim minim voluptate dolore laborum. Minim mollit
        consectetur in ex eiusmod non non qui. Deserunt nostrud eiusmod aute cupidatat consectetur
        et amet.
      </p>
      <p>
        Ea et voluptate eu occaecat velit sint elit fugiat ullamco consectetur. Duis laborum officia
        aute consectetur fugiat cupidatat ut amet aute. Aliqua incididunt nisi reprehenderit officia
        nisi aliqua ullamco aliquip et consequat velit consequat velit. Cillum enim elit nostrud
        nulla ex duis nostrud eiusmod. Non et esse dolore irure dolor ex non labore commodo ex
        mollit dolore. Cillum aliqua aute non incididunt sit est ut aute commodo. Sint elit
        consequat adipisicing anim veniam cupidatat eu cillum nulla laboris labore do. In esse
        aliqua irure pariatur non aute sit esse cupidatat qui ullamco aliqua exercitation quis.
        Consequat enim eu magna Lorem id non consectetur. Aute fugiat elit mollit in pariatur.
        Eiusmod quis deserunt dolore fugiat dolor fugiat. Et mollit est non laborum do ea
        reprehenderit commodo ad consectetur. Minim excepteur nostrud reprehenderit anim esse
        ullamco ullamco labore cupidatat in pariatur aute. Magna duis aliquip est eiusmod aute
        adipisicing ex. Excepteur mollit est dolor officia id reprehenderit duis duis cupidatat
        nisi. Eiusmod sunt exercitation cillum do ex reprehenderit reprehenderit cupidatat eu. Elit
        amet adipisicing labore consequat quis eiusmod nisi incididunt eiusmod ad velit. Nostrud
        consectetur eiusmod reprehenderit laborum irure laboris. Excepteur sit Lorem excepteur non.
        Aute mollit amet pariatur amet ipsum dolore non amet tempor aliqua. Tempor excepteur eiusmod
        laborum sint aliqua ut consequat id anim. Excepteur mollit est dolor officia id
        reprehenderit duis duis cupidatat nisi. Eiusmod sunt exercitation cillum do ex reprehenderit
        reprehenderit cupidatat eu.
      </p>
      <h3>First header</h3>
    </article>
    <footer>Footer</footer>
  </>
);

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement);
