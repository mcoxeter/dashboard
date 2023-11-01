import styles from './cell.module.css';
import * as React from 'react';
import { DashboardContext } from './dashboard-context';

export interface CellProps {
  id: string;
  children?: React.ReactElement;
}
export function Cell({ id, children }: CellProps): React.ReactElement {
  const [dragOver, setDragOver] = React.useState(false);
  const classNames = [styles.cell];
  dragOver && classNames.push(styles.dragging);

  return (
    <div
      id={`cell_${id}`}
      className={classNames.join(' ')}
      onDragEnter={() => setDragOver(true)}
      onDragLeave={() => setDragOver(false)}
      onDrop={(ev) => {
        ev.preventDefault();
      }}
    >
      {children ?? (dragOver ? <Dragging /> : <Empty />)}
    </div>
  );
}

function Empty(): React.ReactElement {
  return <div className={styles.empty}></div>;
}

function Dragging(): React.ReactElement {
  const context = React.useContext(DashboardContext);
  const dragging = context?.getCurrentDragging();
  const size = context?.getWidgetSize(dragging ?? '');
  return <div style={{ width: size?.width, height: size?.height }} />;
}

export function getCellSize(size: 'single' | 'double' | 'triple'): string {
  const single = 128;
  const gap = 4;
  const border = 3;
  switch (size) {
    case 'single':
      return `${single}px`;
    case 'double':
      return `${single * 2 + border * 2 + gap}px`;
    case 'triple':
      return `${single * 3 + border * 4 + gap * 2}px`;
  }
  return `${single}px`;
}
