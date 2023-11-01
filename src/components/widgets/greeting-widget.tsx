import * as React from 'react';
import styles from './greeting-widget.module.css';
import { Widget } from './widget';
import { getCellSize } from '../cell';
export function GreetingWidget(): React.ReactElement {
  return (
    <Widget
      name='GreetingWidget'
      height={getCellSize('single')}
      width={getCellSize('triple')}
    >
      <div className={styles.component}>Greetings user</div>
    </Widget>
  );
}
