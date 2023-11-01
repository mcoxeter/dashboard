import styles from './widget-selector.module.css';
import * as React from 'react';
import { ClockWidget } from './widgets/clock-widget';
import { GreetingWidget } from './widgets/greeting-widget';

export function WidgetSelector(): React.ReactElement {
  return (
    <div className={styles.component}>
      <ClockWidget />
      <GreetingWidget />
    </div>
  );
}

export interface WidgetContainerProps {
  children: React.ReactElement;
}

export function Widget1(): React.ReactElement {
  return (
    <div draggable className={styles.widget1}>
      Widget 1
    </div>
  );
}

export function Widget2(): React.ReactElement {
  return (
    <div draggable className={styles.widget2}>
      Widget 2
    </div>
  );
}
