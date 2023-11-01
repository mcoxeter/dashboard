import { Cell } from './cell';
import * as React from 'react';
import { DashboardContext } from './dashboard-context';
import styles from './dashboard-editing.module.css';
import { createWidget } from './widget-factory';

export function DashboardEditing(): React.ReactElement {
  const cellIds = Array.from(Array(100).keys());
  const context = React.useContext(DashboardContext);
  const widgets = context?.getLayout();

  return (
    <div className={styles.component}>
      {cellIds.map((i) => {
        const widget = widgets?.find((x) => x.id === i.toString());
        if (widget) {
          return (
            <Cell key={i} id={i.toString()}>
              {createWidget(widget)}
            </Cell>
          );
        }
        return <Cell key={i} id={i.toString()} />;
      })}
    </div>
  );
}
