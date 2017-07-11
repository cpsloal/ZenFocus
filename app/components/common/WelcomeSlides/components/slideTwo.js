import React from 'react';
import classNames from 'classnames';

import focus from 'assets/images/focus.png';

const imageStyles = classNames('mx-auto');

const slideTwo = (
  <div>
    <img
      src={focus}
      alt="focus"
      title="focus phase"
      className={imageStyles}
      draggable="false"
    />
    <h2 className="zen-red">Start a focus phase</h2>
    <p>Work, Study, Excercise, Read, etc.</p>
  </div>
);

export default slideTwo;
