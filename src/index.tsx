import React from 'react'
import ReactDOM from 'react-dom'
import MockDate from 'mockdate';

import { Hello } from './Hello'

MockDate.set(new Date('2022-11-22'));

ReactDOM.render(
  <Hello/>,
  document.body
)
