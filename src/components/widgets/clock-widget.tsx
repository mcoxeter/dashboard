import * as React from 'react';
import styles from './clock-widget.module.css';
import { Widget } from './widget';
import { getCellSize } from '../cell';
export function ClockWidget(): React.ReactElement {
  return (
    <Widget
      name='ClockWidget'
      height={getCellSize('single')}
      width={getCellSize('single')}
    >
      <div className={styles.component}>Clock</div>
    </Widget>
  );
}
