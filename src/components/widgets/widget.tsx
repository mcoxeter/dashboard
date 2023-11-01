import * as React from 'react';
import styles from './widget.module.css';
import { DashboardContext } from '../dashboard-context';
export interface WidgetProps {
  name: string;
  height: string;
  width: string;
  children: React.ReactElement;
}
export function Widget({
  children,
  name,
  height,
  width
}: WidgetProps): React.ReactElement {
  const context = React.useContext(DashboardContext);
  const [dragging, setDragging] = React.useState(false);
  const classNames = [styles.widget];
  dragging && classNames.push(styles.dragging);
  React.useEffect(() => {
    if (context) {
      context.registerWidger(name, { height, width });
    }
  }, [context, height, width, name]);

  return (
    <div
      style={{ width, height }}
      className={classNames.join(' ')}
      draggable
      onDragStart={() => {
        setDragging(true);
        context?.setCurrentDragging(name);
      }}
      onDragEnd={() => {
        setDragging(false);
        context?.setCurrentDragging('');
      }}
    >
      {children}
    </div>
  );
}
